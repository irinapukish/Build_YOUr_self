import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            console.log(response.data); // tu możesz zapisać token w localStorage
            localStorage.setItem('token', response.data.token);

        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Logowanie</h2>
            <p style={styles.subtitle}>Witaj ponownie! Zaloguj się do swojego konta.</p>
            <form style={styles.field} onSubmit={handleSubmit}>
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
                <button type="submit" style={styles.button}>
                    Zaloguj się
                </button>
            </form>
            <p style={styles.registerText}>
                Nie masz konta? <a href="/register" style={styles.registerLink}>Zarejestruj się</a>
            </p>
        </div>
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
      marginBottom: '10px'
    },
    subtitle: {
      color: '#333',
      marginBottom: '20px',
    },
    registerText: {
        marginTop: "10px",
        fontSize: "14px",
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
    link: {
      color: '#6b8f5e',
      textDecoration: 'none',
      fontSize: '14px',
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
  };
  
export default Login;
