import React, { createContext, useEffect, useContext, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const StoreContext = createContext({});

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({});

  const matchAqua = useRouteMatch('/aqua-store');
  const matchFire = useRouteMatch('/fire-store');

  useEffect(() => {
    if (matchAqua) setStore({ id: 'aqua', title: 'AquaStore' });
    if (matchFire) setStore({ id: 'fire', title: 'FireStore' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStore must be used within an StoreContext');
  }

  return context;
}

export { StoreProvider, useStore };
