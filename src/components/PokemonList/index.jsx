import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const PokemonList = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

PokemonList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokemonList;
