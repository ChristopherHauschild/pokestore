import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiPlus as IconAdd } from 'react-icons/fi';

import { useStore } from 'hooks/store';
import { useCart } from 'hooks/cart';
import { useToast } from 'hooks/toast';

import { toCurrency, toPlots } from 'utils/formatters';

import { Wrapper, Picture, Name, Price, Plots, ButtonAdd } from './styles';

const PokemonCard = ({ name, image, price }) => {
  const { store } = useStore();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const onAddToCart = useCallback(
    pokemon => {
      addToCart(pokemon);
      addToast({
        type: 'info',
        title: 'Pokémon adicionado ao carrinho',
        description: `${pokemon.name} foi adicionado com sucesso.`,
      });
    },
    [addToCart, addToast],
  );

  return (
    <Wrapper store={store}>
      <div>
        <Picture>
          <img src={image} alt={name} />
        </Picture>

        <Name>{name}</Name>

        <Price>{toCurrency(price)}</Price>
        <Plots>{toPlots(price, 12)}</Plots>

        <ButtonAdd
          onClick={() => onAddToCart({ name, image, price, type: store })}
        >
          <IconAdd />
          <span>Comprar</span>
        </ButtonAdd>
      </div>
    </Wrapper>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PokemonCard;
