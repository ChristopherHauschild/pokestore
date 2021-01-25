import React, { useMemo } from 'react';
import { FiShoppingCart as IconCart, FiSearch as IconSearch } from 'react-icons/fi'; // prettier-ignore

import { useStore } from 'hooks/store';
import { useCart } from 'hooks/cart';

import Conditional from 'components/Conditional';
import useCartModal from 'components/CartModal';

import { Wrapper, MainHeader, Title, Search, ButtonCart, Sinalizer } from './styles'; // prettier-ignore

const Header = () => {
  const { store, onSearch } = useStore();
  const { cart } = useCart();

  const { Modal, openModal } = useCartModal();

  const headerTitle = useMemo(() => {
    return store === 'water' ? 'WaterStore' : 'FireStore';
  }, [store]);

  const cartCount = useMemo(() => {
    const filteredCart = cart.filter(x => x.type === store);
    return filteredCart.length >= 10 ? '+' : filteredCart.length;
  }, [cart, store]);

  return (
    <>
      {Modal}

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
