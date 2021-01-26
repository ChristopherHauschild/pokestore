import React, { useCallback, useMemo, useState } from 'react';
import { FiX as IconX } from 'react-icons/fi';

import { useStore } from 'hooks/store';
import { useCart } from 'hooks/cart';

import { toCurrency } from 'utils/formatters';

import Conditional from 'components/Conditional';
import EmptyData from 'components/EmptyData';
import CartPokemon from 'components/CartPokemon';

import { Wrapper, ButtonClose, ModalTitle, Content, TotalPrice, ButtonFinish } from './styles'; // prettier-ignore

const CartModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const { store } = useStore();
  const { cart, removeFromCart } = useCart();

  const openModal = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpened(false);
  }, []);

  const cartStore = useMemo(() => {
    return cart.filter(x => x.type === store);
  }, [cart, store]);

  const cartPrice = useMemo(() => {
    if (!cartStore.length) return undefined;

    const sumPrices = cartStore.map(x => x.price).reduce((x1, x2) => x1 + x2);
    return toCurrency(sumPrices);
  }, [cartStore]);

  const onRemovePokemon = useCallback(
    id => {
      removeFromCart(id);
    },
    [removeFromCart],
  );

  const Modal = useMemo(() => {
    return (
      <Wrapper store={store} show={isOpened}>
        <div>
          <ButtonClose onClick={closeModal}>
            <IconX />
          </ButtonClose>

          <ModalTitle>Carrinho</ModalTitle>

          <Content>
            <Conditional when={!cartStore.length}>
              <EmptyData type="empty-cart" />
            </Conditional>

            <Conditional when={!!cartStore.length}>
              {cartStore.map(x => (
                <CartPokemon
                  key={x.id}
                  image={x.image}
                  name={x.name}
                  price={x.price}
                  onRemove={() => onRemovePokemon(x.id)}
                />
              ))}
            </Conditional>
          </Content>

          <Conditional when={!!cartStore.length}>
            <TotalPrice>
              <strong>Total</strong>
              <strong>{cartPrice}</strong>
            </TotalPrice>
          </Conditional>

          <ButtonFinish disabled={!cartStore.length}>
            <strong>Finalizar compra</strong>
          </ButtonFinish>
        </div>
      </Wrapper>
    );
  }, [isOpened, store, cartPrice, cartStore, onRemovePokemon, closeModal]);

  return { Modal, openModal };
};

export default CartModal;
