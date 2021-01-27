import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper, Picture, StoreDetails } from './styles';

const StoreCard = ({ store, image, title, description }) => {
  return (
    <Wrapper store={store}>
      <Link to={`/store/${store}`}>
        <Picture>
          <img src={image} alt={title} />
        </Picture>

        <StoreDetails>
          <strong>{title}</strong>
          <span>{description}</span>
        </StoreDetails>
      </Link>
    </Wrapper>
  );
};

StoreCard.propTypes = {
  store: PropTypes.oneOf(['water', 'fire']).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StoreCard;
