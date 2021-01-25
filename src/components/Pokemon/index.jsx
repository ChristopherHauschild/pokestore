import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus as IconAdd } from 'react-icons/fi';

import { useStore } from 'hooks/store';
import { useCart } from 'hooks/cart';

import { toCurrency, toPlots } from 'utils/formatters';

import { Wrapper, Picture, Name, Price, Plots, Button } from './styles';

const Pokemon = ({ id, name, image, price }) => {
  const { store } = useStore();
  const { addToCart } = useCart();

  return (
    <Wrapper store={store}>
      <div>
        <Picture>
          <img src={image} alt={name} />
        </Picture>
        <Name>{name}</Name>
        <Price>{toCurrency(price)}</Price>
        <Plots>{toPlots(price, 12)}</Plots>
        <Button
          onClick={() => addToCart({ id, name, image, price, type: store })}
        >
          <IconAdd />
          <span>Comprar</span>
        </Button>
      </div>
    </Wrapper>
  );
};

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Pokemon;
