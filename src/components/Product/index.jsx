import React from 'react';
import { FiPlus as IconAdd } from 'react-icons/fi';

import { useStore } from 'hooks/store';

import { Wrapper, Picture, Name, Price, Plots, Button } from './styles';

const Product = () => {
  const { store } = useStore();

  return (
    <Wrapper store={store.id}>
      <Picture />
      <Name>Nome do produto</Name>
      <Price>R$ 4.50000</Price>
      <Plots>2x vezes de R$ 4.00</Plots>
      <Button>
        <IconAdd />
        <span>Comprar</span>
      </Button>
    </Wrapper>
  );
};

export default Product;
