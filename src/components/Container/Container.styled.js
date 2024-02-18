import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 300px;
  min-width: 300px;
  max-width: 1440px;

  margin: auto;
  padding: 0 10px;

  @media (min-width: 820px) {
    padding: 0 32px;

    width: 780px;
  }
  @media (min-width: 1500px) {
    padding: 0 128px;

    width: 1440px;
  }
`;
