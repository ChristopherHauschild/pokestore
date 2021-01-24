import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus as IconAdd } from 'react-icons/fi';

import { useStore } from 'hooks/store';

import { toCurrency, toPlots } from 'utils/formatters';

import { Wrapper, Picture, Name, Price, Plots, Button } from './styles';

const Product = ({ name, image, price }) => {
  const { store } = useStore();

  return (
    <Wrapper store={store.id}>
      <div>
        <Picture>
          <img src={image} alt={name} />
        </Picture>
        <Name>{name}</Name>
        <Price>{toCurrency(price)}</Price>
        <Plots>{toPlots(price, 12)}</Plots>
        <Button>
          <IconAdd />
          <span>Comprar</span>
        </Button>
      </div>
    </Wrapper>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
