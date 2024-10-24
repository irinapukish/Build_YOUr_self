const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const secretKey = 'your-secret-key';

// Middleware
app.use(express.json());
app.use(cors());

// Połączenie z bazą danych MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase').then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Rejestracja użytkownika
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
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

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ token, userId: user._id });
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
            next();
        } catch (error) {
            res.status(403).json({ message: 'Invalid token' });
        }
    }
    catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
};

// Przykład chronionej trasy
app.get('/protected-route', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route' });
});


// Start serwera
app.listen(PORT, () => console.log(`Server running on port ${5000}`));
