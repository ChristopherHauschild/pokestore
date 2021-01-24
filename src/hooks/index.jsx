import React from 'react';
import PropTypes from 'prop-types';

import { StoreProvider } from 'hooks/store';
import { CartProvider } from 'hooks/cart';

const AppProvider = ({ children }) => {
  return (
    <StoreProvider>
      <CartProvider>{children}</CartProvider>
    </StoreProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
