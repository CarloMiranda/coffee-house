import React, { createContext, useState } from 'react';
import { BEVERAGES } from '../ItemsJson/Beverage';
import { MEALS } from '../ItemsJson/Meal';

export const ShopContext = createContext(null);

const getDefaultCart = (length) => {
    let cart = {};
    for (let i = 1; i <= length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart(BEVERAGES.length + MEALS.length));

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
