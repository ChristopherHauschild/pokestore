import React, { useMemo } from 'react';
import {
  FiShoppingCart as IconCart,
  FiSearch as IconSearch,
} from 'react-icons/fi';

import { useStore } from 'hooks/store';
import { useCart } from 'hooks/cart';

import Conditional from 'components/Conditional';
import useCartModal from 'components/CartModal';

import {
  Wrapper,
  MainHeader,
  Logo,
  Search,
  ButtonCart,
  Sinalizer,
} from './styles';

const Header = () => {
  const { store, onSearch } = useStore();
  const { cart } = useCart();

  const { Modal, openModal } = useCartModal();

  const logoTitle = useMemo(() => {
    return store === 'water' ? 'WaterStore' : 'FireStore';
  }, [store]);

  const cartCount = useMemo(() => {
    const cartStore = cart.filter(x => x.type === store);

    return cartStore.length >= 10 ? '+' : cartStore.length;
  }, [cart, store]);

  return (
    <>
      {Modal}

      <Wrapper store={store}>
        <MainHeader>
          <Logo>
            <h1>{logoTitle}</h1>
          </Logo>

          <Search>
            <input
              type="text"
              placeholder="Busque pelo nome do Pokémon..."
              onChange={event => onSearch(event.target.value)}
            />
            <div>
              <IconSearch />
            </div>
          </Search>

          <ButtonCart onClick={openModal}>
            <Conditional when={!!cartCount}>
              <Sinalizer>
                <span>{cartCount}</span>
              </Sinalizer>
            </Conditional>

            <IconCart />
          </ButtonCart>
        </MainHeader>
      </Wrapper>
    </>
  );
};

export default Header;
