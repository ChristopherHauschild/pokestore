import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const ProductList = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ProductList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductList;
