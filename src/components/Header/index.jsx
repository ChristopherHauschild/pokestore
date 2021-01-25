import React, { useMemo } from 'react';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { useStore } from 'hooks/store';
import { useCart } from 'hooks/cart';

import Conditional from 'components/Conditional';

import { Wrapper, MainHeader, Title, Search, Cart, Sinalizer } from './styles';

const Header = () => {
  const { store, onSearch } = useStore();
  const { cart } = useCart();

  const headerTitle = useMemo(() => {
    return store === 'water' ? 'WaterStore' : 'FireStore';
  }, [store]);

  const cartCount = useMemo(() => {
    const filteredCart = cart.filter(x => x.type === store);
    return filteredCart.length >= 10 ? '+' : filteredCart.length;
  }, [cart, store]);

  return (
    <Wrapper store={store}>
      <MainHeader>
        <Title>
          <h1>{headerTitle}</h1>
        </Title>
        <Search>
          <input
            type="text"
            placeholder="Busque pelo nome do Pokémon..."
            onChange={e => onSearch(e.target.value)}
          />
          <div>
            <IconSearch />
          </div>
        </Search>
        <Cart>
          <Conditional when={!!cartCount}>
            <Sinalizer>
              <span>{cartCount}</span>
            </Sinalizer>
          </Conditional>

          <IconCart />
        </Cart>
      </MainHeader>
    </Wrapper>
  );
};

export default Header;
