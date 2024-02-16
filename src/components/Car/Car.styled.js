import styled from 'styled-components';

export const StyledLiCar = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
`;

export const StyledIconBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: 0;

  border: none;
`;

export const StyledImg = styled.img`
  width: 100%;
  min-height: 268px;
  background-image: url(https://t3.ftcdn.net/jpg/01/23/52/24/360_F_123522471_XZe5ebqil1DFJRgOUJ6taDP4DnmHjtL7.jpg);

  object-fit: cover;
  object-position: center;
  border-radius: 14px;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  && span {
    font-family: Inter;
    color: var(--primary-color-blue);
  }
`;

export const StyledDescription = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;

  > ul {
    display: flex;
    gap: 10px;
    line-height: 1.5;
    font-size: 12px;
    align-items: center;

    > li {
      position: relative;

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 0;
        right: -5px;
        height: 100%;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.1);
      }
    }
    > p {
      text-align: center;
      opacity: 0.5;
    }
  }
`;

export const StyledButton = styled.button`
  text-align: center;
  color: var(--primary-color-white);
  background-color: var(--primary-color-blue);
  border-radius: 12px;
  height: 44px;
  border: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  /* margin-top: 28px; */
  width: 274px;
  padding: 12px 0;
  text-align: center;

  &:hover {
    background-color: var(--secondary-color-blue);
  }
`;

export const SyledCarType = styled.p`
  text-transform: capitalize;
`;
