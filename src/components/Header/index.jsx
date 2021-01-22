import React from 'react';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { Wrapper, MainHeader, Title, Search, Cart } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <MainHeader>
        <Title>
          <h1>Header</h1>
        </Title>
        <Search>
          <input type="text" placeholder="O que você deseja buscar?" />
          <IconSearch />
        </Search>
        <Cart>
          <IconCart />
        </Cart>
      </MainHeader>
    </Wrapper>
  );
};

export default Header;
