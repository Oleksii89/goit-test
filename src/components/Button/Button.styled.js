import styled from 'styled-components';

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
  width: 274px;
  padding: 12px 0;
  text-align: center;

  &:hover {
    background-color: var(--secondary-color-blue);
  }
`;
export const StyledRentLoadMoreBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: var(--primary-color-blue);
  margin-top: 100px;
  text-decoration: underline;
  background: transparent;
  &:is(:hover, :focus) {
    color: var(--secondary-color-blue);
  }
`;
