import React from 'react';
import PropTypes from 'prop-types';
import { FiMeh as IconMeh, FiSearch as IconSearch, FiPackage as IconPackage } from 'react-icons/fi'; // prettier-ignore

import Conditional from 'components/Conditional';

import { Wrapper } from './styles';

const EmptyData = ({ type, search }) => {
  return (
    <Wrapper type={type}>
      <Conditional when={type === 'empty-list'}>
        <IconMeh />
        <span>Não há dados disponíveis.</span>
      </Conditional>

      <Conditional when={type === 'empty-cart'}>
        <IconPackage />
        <span>O seu carrinho está vazio.</span>
      </Conditional>

      <Conditional when={type === 'empty-search'}>
        <IconSearch />
        <span>{`Nenhum Pokémon com "${search}" encontrado.`}</span>
      </Conditional>
    </Wrapper>
  );
};

EmptyData.propTypes = {
  type: PropTypes.oneOf(['empty-list', 'empty-search', 'empty-cart'])
    .isRequired,
  search: PropTypes.string,
};

EmptyData.defaultProps = {
  search: undefined,
};

export default EmptyData;
