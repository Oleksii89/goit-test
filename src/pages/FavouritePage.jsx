import { useSelector } from 'react-redux';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { selectFavourites } from '../redux/cars.selectors';

import { StyledRentListCards, StyledRentWrapper } from './RentPage.styled';
import { Car } from 'components/Car/Car';

const FavouritePage = () => {
  const favouriteCars = useSelector(selectFavourites);
  return (
    <Section>
      <Container>
        <StyledRentWrapper>
          {favouriteCars.length === 0 ? (
            <>
              <div>You haven't added any car to favourite</div>
            </>
          ) : (
            <StyledRentListCards>
              {favouriteCars.map(e => (
                <Car key={e.id} car={e} />
              ))}
            </StyledRentListCards>
          )}
        </StyledRentWrapper>
      </Container>
    </Section>
  );
};

export default FavouritePage;
