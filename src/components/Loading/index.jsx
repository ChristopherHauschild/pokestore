import React from 'react';
import { FiLoader as IconLoader } from 'react-icons/fi';

import { Wrapper } from './styles';

const Loading = () => {
  return (
    <Wrapper>
      <IconLoader />
      <span>Carregando dados...</span>
    </Wrapper>
  );
};

export default Loading;
