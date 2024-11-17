const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;
const secretKey = 'your-secret-key';

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Połączenie z bazą danych MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase').then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});


const userDataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    activity: { type: String, required: true },
    goal: { type: String, required: true },
}, { timestamps: true });

const UserData = mongoose.model('UserData', userDataSchema);
// module.exports = UserData;
const User = mongoose.model('User', UserSchema);

// Rejestracja użytkownika
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        // Check if this is the first user and assign "admin" role if true
        const isFirstUser = (await User.countDocuments({})) === 0;
        const role = isFirstUser ? 'admin' : 'user';

        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', role });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Logowanie użytkownika
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1d' });

        // Return role along with token
        res.status(200).json({ token, userId: user._id, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});


const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        try {
            const decoded = jwt.verify(token, secretKey);
            req.userId = decoded.id;
            req.userRole = decoded.role;
            next();
        } catch (error) {
            res.status(403).json({ message: 'Invalid token' });
        }
    }
    catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.userRole !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
};


app.get('/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const users = await User.find({}, 'username email role');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Could not retrieve users' });
    }
});

app.delete('/admin/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const userId = req.params.id;
        
        // Prevent admins from deleting their own account for security
        if (req.userId === userId) {
            return res.status(400).json({ message: 'Admins cannot delete their own account' });
        }

        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing user' });
    }
});


app.post('/saveuserdata', authMiddleware, async (req, res) => {
    const { gender, age, height, weight, activity, goal } = req.body;

    try {

        const userData = await UserData.findOne({ userId: req.userId });

        if (!userData) {
            const newUserData = new UserData({
                userId: req.userId,  // The user ID from the authenticated request
                gender,
                age,
                height,
                weight,
                activity,
                goal,
            });
    
            await newUserData.save(); // Save the data to the database
            res.status(201).json({ message: 'User data saved successfully' });
        }
        else {
            userData.gender = gender;
            userData.age = age;
            userData.height = height;
            userData.weight = weight;
            userData.activity = activity;
            userData.goal = goal;

            await userData.save(); // Save the data to the database
            res.status(201).json({ message: 'User data updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

app.get('/getuserdata', authMiddleware, async (req, res) => {
    try {
        const userData = await UserData.findOne({ userId: req.userId });

        if (!userData) {
            return res.status(404).json({ message: 'User data not found' });
        }

        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Start serwera
app.listen(PORT, () => console.log(`Server running on port ${5001}`));
