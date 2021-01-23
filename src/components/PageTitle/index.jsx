import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const PageTitle = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
