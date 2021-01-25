import React, { useMemo } from 'react';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { useStore } from 'hooks/store';
import { useCart } from 'hooks/cart';

import Conditional from 'components/Conditional';

import { Wrapper, MainHeader, Title, Search, Cart, Sinalizer } from './styles';

const Header = () => {
  const { store } = useStore();
  const { cart } = useCart();

  const headerTitle = useMemo(() => {
    return store === 'water' ? 'WaterStore' : 'FireStore';
  }, [store]);

  const cartItems = useMemo(() => {
    const parsedCartItems = Array.isArray(cart) ? cart : JSON.parse(cart);
    return parsedCartItems.filter(x => x.type === store);
  }, [cart, store]);

  const cartItemsCount = useMemo(() => {
    return cartItems.length >= 10 ? '+' : cartItems.length;
  }, [cartItems]);

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
          <Conditional when={cartItems.length > 0}>
            <Sinalizer>
              <span>{cartItemsCount}</span>
            </Sinalizer>
          </Conditional>

          <IconCart />
        </Cart>
      </MainHeader>
    </Wrapper>
  );
};

export default Header;
