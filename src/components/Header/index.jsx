import React from 'react';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { useStore } from 'hooks/store';

import { Wrapper, MainHeader, Title, Search, Cart, Sinalizer } from './styles';

const Header = () => {
  const { store } = useStore();

  return (
    <Wrapper store={store.id}>
      <MainHeader>
        <Title>
          <h1>{store.title}</h1>
        </Title>
        <Search>
          <input type="text" placeholder="Busque pelo nome do Pokémon..." />
          <div>
            <IconSearch />
          </div>
        </Search>
        <Cart>
          <Sinalizer />
          <IconCart />
        </Cart>
      </MainHeader>
    </Wrapper>
  );
};

export default Header;
