import styled from 'styled-components';

export const StyledRentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;

export const StyledRentListCards = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  column-gap: 29px;
  align-items: center;

  @media (min-width: 780px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
