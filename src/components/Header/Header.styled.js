import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 3px solid var(--primary-color-blue);

  && nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  && container {
    padding: 15px 0;
    display: flex;
    align-items: center;
  }
`;

export const StyledHeaderContainer = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
`;
