import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { catalogCarsThunk } from '../redux/cars/carsThunk';
import { selectCatalogCarsData, selectNextPage } from '../redux/cars.selectors';

import { setNextPage } from '../redux/slice/nextApiPageSlice';
import { StyledRentListCards, StyledRentWrapper } from './RentPage.styled';
import { Car } from 'components/Car/Car';
import { StyledRentLoadMoreBtn } from 'components/Button/Button.styled';

const RentPage = () => {
  const dispatch = useDispatch();
  const responseCarData = useSelector(selectCatalogCarsData);
  const nextPage = useSelector(selectNextPage);

  useEffect(() => {
    if (responseCarData.length === 0) {
      dispatch(catalogCarsThunk(1));
    }
  }, [dispatch, responseCarData]);

  const loadMore = () => {
    nextPage === 2 && dispatch(setNextPage(3));
    nextPage === 3 && dispatch(setNextPage(4));
    dispatch(catalogCarsThunk(nextPage));
  };

  return (
    <>
      <Section>
        <Container>
          <StyledRentWrapper>
            <StyledRentListCards>
              {responseCarData.map(e => (
                <Car key={e.id} car={e} />
              ))}
            </StyledRentListCards>
            {nextPage < 4 && (
              <StyledRentLoadMoreBtn onClick={loadMore}>
                Load more
              </StyledRentLoadMoreBtn>
            )}
          </StyledRentWrapper>
        </Container>
      </Section>
    </>
  );
};

export default RentPage;
