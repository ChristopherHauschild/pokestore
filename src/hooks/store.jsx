import React, { createContext, useEffect, useContext, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const StoreContext = createContext({});

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(undefined);

  const matchWaterStore = useRouteMatch('/store/water');
  const matchFireStore = useRouteMatch('/store/fire');

  useEffect(() => {
    if (matchWaterStore) setStore('water');
    if (matchFireStore) setStore('fire');
  }, [matchWaterStore, matchFireStore]);

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
