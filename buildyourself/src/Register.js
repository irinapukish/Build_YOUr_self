import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/register', formData);
            console.log(response.data);
            setIsRegistered(true);
        } catch (error) {
            console.error('There was an error!', error);
            alert("Ten e-mail już zajęty");
        }  
    };

    return (
        <>
        {!isRegistered && (
          <div style={styles.container}>
            <h2 style={styles.title}>Rejestracja</h2>
            <form style={styles.field} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder=" Nazwa Użytkownika"
                    value={formData.username}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder=" Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder=" Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Zarejestruj się</button>
            </form>
        </div>
        )}
        {isRegistered && (
            <div style={styles.container}>
            <h2 style={styles.title}>Rejestracja udana</h2>
            <p style={styles.registerText}>
                Przejdż do logowania <a href="/login" style={styles.loginLink}> Zaloguj się</a>
            </p>
        </div>
        )}
    </>
    );
};

const styles = {

    container: {
      width: '400px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      color: '#6b8f5e',
      fontSize: '24px',
      fontSize: '24px',
      marginBottom: '30px'
    },
    field: {
      marginBottom: '15px',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
      gap: '15px'
    },
    input: {
      width: '100%',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      paddingTop: '10px',
      paddingBottom: '10px',
    },
    button: {
      width: '100%',
      backgroundColor: '#6b8f5e',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
      paddingTop: '10px',
      paddingBottom: '10px'
    }
}
export default Register;
