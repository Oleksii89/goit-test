import { NavLink } from 'react-router-dom';

import { Container } from '../Container/Container';
import { StyledHeader, StyledHeaderContainer } from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContainer>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">Rental cars</NavLink>
              </li>
              <li>
                <NavLink to="/favourites">Favourite cars</NavLink>
              </li>
            </ul>
          </nav>
        </StyledHeaderContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
