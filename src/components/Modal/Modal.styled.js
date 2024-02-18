import styled from 'styled-components';

export const StyledOverlayForModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: visible;

  z-index: 100;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  width: 541px;
  height: 752px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;

  background-color: var(--primary-color-white);
  border-radius: 24px;
`;

export const StyledWrappedModal = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: 0;
  border: none;
`;

export const StyledModalSmallDescription = styled.p`
  color: var(--prim-black-color);
  font-size: 14px;
  line-height: 1.43;
  margin-top: 14px;
`;

export const StyledConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;

  > li {
    background-color: #f9f9f9;
    border-radius: 35px;
    padding: 7px 14px;

    > p {
      color: var(--sec-black-color);
      font-family: Montserrat;
      font-size: 12px;
      line-height: 1.5;

      && span {
        font-weight: 600;
        color: var(--prim-accent-color);
      }
    }
  }
`;
