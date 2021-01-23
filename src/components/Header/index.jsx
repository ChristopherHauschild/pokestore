import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { Wrapper, MainHeader, Title, Search, Cart, Sinalizer } from './styles';

const Header = () => {
  const [store, setStore] = useState({});

  const matchAqua = useRouteMatch('/aqua-store');
  const matchFire = useRouteMatch('/fire-store');

  useEffect(() => {
    if (matchAqua) setStore({ id: 'aqua', title: 'AquaStore' });
    if (matchFire) setStore({ id: 'fire', title: 'FireStore' });
  }, [matchAqua, matchFire]);

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
