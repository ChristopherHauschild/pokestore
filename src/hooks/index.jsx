import React from 'react';
import PropTypes from 'prop-types';

import { StoreProvider } from 'hooks/store';

const AppProvider = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
