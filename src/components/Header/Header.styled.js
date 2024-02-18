import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 3px solid var(--primary-color-blue);

  && nav {
    display: flex;
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
