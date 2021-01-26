import React from 'react';
import PropTypes from 'prop-types';

import { StoreProvider } from 'hooks/store';
import { CartProvider } from 'hooks/cart';
import { ToastProvider } from 'hooks/toast';

const AppProvider = ({ children }) => {
  return (
    <StoreProvider>
      <CartProvider>
        <ToastProvider>{children}</ToastProvider>
      </CartProvider>
    </StoreProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
