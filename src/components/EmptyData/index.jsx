import React from 'react';
import { FiMeh as IconMeh } from 'react-icons/fi';

import { Wrapper } from './styles';

const EmptyData = () => {
  return (
    <Wrapper>
      <IconMeh />
      <span>Não há dados disponíveis.</span>
    </Wrapper>
  );
};

export default EmptyData;
