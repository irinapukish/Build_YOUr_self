import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

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
      <h1>Admin Dashboard</h1>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
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
                  Remove User
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