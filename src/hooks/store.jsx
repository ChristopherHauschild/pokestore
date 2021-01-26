/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useContext, useState, useCallback } from 'react'; // prettier-ignore
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

const StoreContext = createContext({});

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(undefined);
  const [search, setSearch] = useState(undefined);

  const matchWaterStore = useRouteMatch('/store/water');
  const matchFireStore = useRouteMatch('/store/fire');

  useEffect(() => {
    if (matchWaterStore) setStore('water');
    if (matchFireStore) setStore('fire');
  }, [matchWaterStore, matchFireStore]);

  const onSearch = useCallback(
    _.debounce(searchValue => {
      setSearch(searchValue);
    }, 200),
    [],
  );

  return (
    <StoreContext.Provider value={{ store, search, onSearch }}>
      {children}
    </StoreContext.Provider>
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
