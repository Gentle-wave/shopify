import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [registeredUsers, setRegisteredUsers] = useState([]); // State to store registered users

    const login = (email, password) => {
        // Check if the user is registered and credentials match
        const foundUser = registeredUsers.find(
            (registeredUser) => registeredUser.email === email && registeredUser.password === password
        );

        if (foundUser) {
            setUser({ email });
            alert('Login successful!');
            navigate('/');
        } else {
            alert('Login failed! Incorrect email or password.');
        }
    };

    const signup = (email, password) => {
        // Check if user is already registered
        const existingUser = registeredUsers.find(
            (registeredUser) => registeredUser.email === email
        );

        if (existingUser) {
            alert('Signup failed! User already exists.');
        } else {
            // Add new user to registeredUsers
            const newUser = { email, password }; // You can also hash the password for security
            setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
            alert('Registration successful!');
            navigate('/login');
        }
    };

    const logout = () => {
        setUser(null);
        alert('Logout successful!');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
