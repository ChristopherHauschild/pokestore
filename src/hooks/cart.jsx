import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('@PokemonStore:cart')) || [];
  });

  const addToCart = useCallback(pokemon => {
    let storageItems = [];
    storageItems = JSON.parse(localStorage.getItem('@PokemonStore:cart')) || [];

    const id = uuid();
    storageItems.push({ ...pokemon, id });

    localStorage.setItem('@PokemonStore:cart', JSON.stringify(storageItems));

    setCart(storageItems);
  }, []);

  const removeFromCart = useCallback(id => {
    const oldStorageItems =
      JSON.parse(localStorage.getItem('@PokemonStore:cart')) || [];
    const newStorageItem = oldStorageItems.filter(x => x.id !== id);

    localStorage.setItem('@PokemonStore:cart', JSON.stringify(newStorageItem));

    setCart(newStorageItem);
  }, []);

  const refreshCart = useCallback(type => {
    const allStorageItems =
      JSON.parse(localStorage.getItem('@PokemonStore:cart')) || [];
    const storeStorageItems = allStorageItems.filter(x => x.type !== type);

    localStorage.setItem(
      '@PokemonStore:cart',
      JSON.stringify(storeStorageItems),
    );

    setCart([storeStorageItems]);
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, refreshCart }}
    >
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
