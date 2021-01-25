import React, { useCallback, useMemo, useState } from 'react';
import { FiX as IconX } from 'react-icons/fi';

import { ButtonClose, Wrapper } from './styles';

const CartModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const openModal = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpened(false);
  }, []);

  const Modal = useMemo(() => {
    return (
      <Wrapper show={isOpened}>
        <div>
          <ButtonClose onClick={closeModal}>
            <IconX />
          </ButtonClose>
        </div>
      </Wrapper>
    );
  }, [isOpened, closeModal]);

  return { Modal, openModal };
};

export default CartModal;
