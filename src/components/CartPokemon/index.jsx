import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash as IconTrash } from 'react-icons/fi';

import { toCurrency } from 'utils/formatters';

import { Wrapper, Picture, Name, Price, ButtonRemove } from './styles';

const CartPokemon = ({ image, name, price, onRemove }) => {
  return (
    <Wrapper>
      <Picture>
        <img src={image} alt={name} />
      </Picture>

      <div>
        <Name>{name}</Name>
        <Price>{toCurrency(price)}</Price>
      </div>

      <ButtonRemove onClick={onRemove}>
        <IconTrash />
      </ButtonRemove>
    </Wrapper>
  );
};

CartPokemon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartPokemon;
