import React from 'react';
import PropTypes from 'prop-types';

const Conditional = ({ when, children }) => {
  return <>{when && children}</>;
};

Conditional.propTypes = {
  when: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Conditional;
