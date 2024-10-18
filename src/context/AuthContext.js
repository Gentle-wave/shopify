import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        setUser({ email });
        alert('Login successful!');
        navigate('/')
    };

    const signup = (email, password) => {
        setUser({ email });
        alert('Signup successful!');
        navigate('/login')

    };

    const logout = () => {
        setUser(null);
        alert('Logout successful!');
        navigate('/login')
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
