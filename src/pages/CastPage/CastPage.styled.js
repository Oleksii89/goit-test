import styled from 'styled-components';

export const StyledCastList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  padding-left: 0;
`;
export const StyledListItem = styled.li`
  width: 135px;
  font-size: 12px;
  padding: 6px;
  border-radius: 14px;
  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    width: 130px;
    height: 150px;
    border-radius: 8px;
  }
`;
