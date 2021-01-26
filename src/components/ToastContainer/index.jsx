/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { Wrapper } from './styles';

const ToastContainer = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Wrapper>
      {messagesWithTransitions.map(({ item, key }) => (
        <Toast key={key} message={item} />
      ))}
    </Wrapper>
  );
};

ToastContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.oneOf(['success', 'error', 'info']),
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default ToastContainer;
