/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  FiCheckCircle as IconCheckCircle,
  FiXCircle as IconXCircle,
  FiAlertCircle as IconAlertCicle,
  FiX as IconX,
} from 'react-icons/fi';

import { useToast } from 'hooks/toast';

import { Wrapper, ButtonClose } from './styles';

const icons = {
  success: <IconCheckCircle />,
  error: <IconXCircle />,
  info: <IconAlertCicle />,
};

const Toast = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Wrapper type={message.type}>
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <ButtonClose onClick={() => removeToast(message.id)}>
        <IconX />
      </ButtonClose>
    </Wrapper>
  );
};

Toast.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error', 'info']),
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Toast;
