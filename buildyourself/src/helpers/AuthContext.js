import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const loadUserDataFromStorage = () => {
        const storeUserData = localStorage.getItem('userData');
        return storeUserData ? JSON.parse(storeUserData) : null;
    };

  const [user, setUser] = useState(loadUserDataFromStorage());

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const logoutUser = () => {
    localStorage.removeItem('userData');
    setUser(null);
  };

  useEffect(() => {
    if (user) {
        loginUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);