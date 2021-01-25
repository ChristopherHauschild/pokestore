import React from 'react';
import PropTypes from 'prop-types';
import { FiMeh as IconMeh, FiSearch as IconSearch } from 'react-icons/fi';

import Conditional from 'components/Conditional';

import { Wrapper } from './styles';

const EmptyData = ({ search }) => {
  return (
    <Wrapper>
      <Conditional when={!!search}>
        <IconSearch />
        <span>{`Nenhum Pokémon com "${search}" encontrado.`}</span>
      </Conditional>

      <Conditional when={!search}>
        <IconMeh />
        <span>Não há dados disponíveis.</span>
      </Conditional>
    </Wrapper>
  );
};

EmptyData.propTypes = {
  search: PropTypes.string,
};

EmptyData.defaultProps = {
  search: undefined,
};

export default EmptyData;
