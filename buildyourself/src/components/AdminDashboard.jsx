import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../helpers/AuthContext';

const AdminDashboard = () => {
  const [users, sentUsers] = useState([]);
  const { user } = useAuth();

  const loadUsers = async (e) => {
    try {
      const response = await axios.get('http://localhost:5001/admin/users', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

        sentUsers(response.data)
    } catch (error) {
        console.error('There was an error!', error);
    }
};

const handleRemoveUser = async (userId) => {
  try {
    await axios.delete(`http://localhost:5001/admin/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    await loadUsers();

  } catch (error) {
    console.error('Error removing user:', error);
  }
};

  useEffect(() => {
    loadUsers();
  }, []);

    return (
      <div className="container">
        <h2>Lista użytkowników</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nazwa użytkownika</th>
            <th>Email</th>
            <th>Rola</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button 
                  onClick={() => handleRemoveUser(user._id)}
                  disabled={user.role === 'admin'}
                >
                  Usuń użytkownika
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;