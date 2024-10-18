import React, { createContext, useContext, useReducer } from 'react';

// Create CartContext
const CartContext = createContext();

// Reducer to handle cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Prevent duplicate entries
            if (!state.some((item) => item.id === action.item.id)) {
                return [...state, action.item];
            }
            return state;
        case 'REMOVE_FROM_CART':
            return state.filter((item, index) => index !== action.index);
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', item });
    };

    const removeFromCart = (index) => {
        dispatch({ type: 'REMOVE_FROM_CART', index });
    };

    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use CartContext
export const useCart = () => {
    return useContext(CartContext);
};
