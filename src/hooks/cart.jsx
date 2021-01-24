import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return localStorage.getItem('@PokemonStore:cart') || [];
  });

  const addToCart = useCallback(pokemon => {
    let storageItems = [];
    storageItems = JSON.parse(localStorage.getItem('@PokemonStore:cart')) || [];
    storageItems.push(pokemon);
    localStorage.setItem('@PokemonStore:cart', JSON.stringify(storageItems));
    setCart(storageItems);
  }, []);

  const removeFromCart = useCallback(id => {
    const oldStorageItems = JSON.parse(
      localStorage.getItem('@PokemonStore:cart'),
    );
    const newStorageItem = oldStorageItems.filter(x => x.name !== id);
    localStorage.setItem('@PokemonStore:cart', JSON.stringify(newStorageItem));
    setCart(newStorageItem);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartContext');
  }

  return context;
}

export { CartProvider, useCart };
