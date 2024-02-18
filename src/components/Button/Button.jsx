import { useDispatch } from 'react-redux';

import { setIsOpenModal } from '../../redux/slice/isOpenModalSlice';
import { setCarInfo } from '../../redux/slice/carInfoSlice';
import { useCallback } from 'react';
// import { setFilter } from '../../redux/slice/filterSlice';
import { StyledButton } from './Button.styled';

function Button({ text, car, make }) {
  const dispatch = useDispatch();

  const learnMore = car => {
    dispatch(setCarInfo(car));
    dispatch(setIsOpenModal(true));
  };

  const closeModal = useCallback(() => {
    dispatch(setIsOpenModal(false));
    alert('You can contact the company by tel: +380730000000');
  }, [dispatch]);

  //   const filterSearch = () => {
  //     dispatch(setFilter(make));
  //   };

  return (
    (text === 'Learn more' && (
      <StyledButton onClick={() => learnMore(car)}>{text}</StyledButton>
    )) ||
    (text === 'Rental car' && (
      <StyledButton onClick={closeModal}>
        <a href="tel:+380730000000">{text}</a>
      </StyledButton>
    ))
    //   ||
    // (text === 'Search' && (
    //   <StyledRentLoadMoreBtn className={b.search} onClick={filterSearch}>
    //     {text}
    //   </StyledRentLoadMoreBtn>
    // ))
  );
}

export default Button;
