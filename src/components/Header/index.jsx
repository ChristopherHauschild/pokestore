import React, { useMemo } from 'react';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { useStore } from 'hooks/store';

import { Wrapper, MainHeader, Title, Search, Cart, Sinalizer } from './styles';

const Header = () => {
  const { store } = useStore();

  const headerTitle = useMemo(() => {
    return store === 'water' ? 'WaterStore' : 'FireStore';
  }, [store]);

  return (
    <Wrapper store={store}>
      <MainHeader>
        <Title>
          <h1>{headerTitle}</h1>
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
