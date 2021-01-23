import React from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { Wrapper, MainHeader, Title, Search, Cart, Sinalizer } from './styles';

const Header = ({ store, title }) => {
  return (
    <Wrapper store={store}>
      <MainHeader>
        <Title store={store}>
          <h1>{title}</h1>
        </Title>
        <Search store={store}>
          <input type="text" placeholder="Busque pelo nome do Pokémon..." />
          <div>
            <IconSearch />
          </div>
        </Search>
        <Cart store={store}>
          <Sinalizer store={store} />
          <IconCart />
        </Cart>
      </MainHeader>
    </Wrapper>
  );
};

Header.propTypes = {
  store: PropTypes.oneOf('aqua', 'fire').isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
