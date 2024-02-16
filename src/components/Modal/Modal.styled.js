import styled from 'styled-components';

export const StyledOverlayForModal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  transition-property: visibility, opacity;
`;

export const StyledModal = styled.div`
  position: absolute;
  width: 541px;
  min-height: 752px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: var(--primary-color-white);
  /* background-repeat: no-repeat; */
  border-radius: 24px;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: 0;
  border: none;
`;
