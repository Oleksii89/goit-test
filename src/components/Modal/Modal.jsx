import {
  StyledCloseBtn,
  StyledModal,
  StyledOverlayForModal,
} from './Modal.styled';

import { ReactComponent as IconModalCloseBtn } from '../../assets/modal-close-btn.svg';

import { useEffect } from 'react';

const Modal = ({ onCloseModal, data }) => {
  useEffect(() => {
    const onKeydown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onCloseModal]);

  const onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  // const {} = data;

  return (
    <StyledOverlayForModal onClick={onOverlayClick}>
      <StyledModal>
        <StyledCloseBtn onClick={onCloseModal}>
          <IconModalCloseBtn />
        </StyledCloseBtn>
      </StyledModal>
    </StyledOverlayForModal>
  );
};

export default Modal;
