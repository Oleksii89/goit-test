import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavourites } from '../../redux/cars.selectors';

import {
  addToFavourites,
  removeFromFavourites,
} from '../../redux/cars/carsSlice';

import { ReactComponent as IconHeart } from '../../assets/heart.svg';
import { ReactComponent as IconActiveHeart } from '../../assets/active-heart.svg';

import {
  StyledDescription,
  StyledIconBtn,
  StyledImg,
  StyledLiCar,
  StyledTitle,
  StyledCarType,
} from './Car.styled';
import Button from 'components/Button/Button';

export const Car = ({ car }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleToggleFavourite = () => {
    if (!isFavourite) {
      dispatch(addToFavourites(car));
      setIsFavourite(true);
    } else {
      dispatch(removeFromFavourites(id));
      setIsFavourite(false);
    }
  };

  const {
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    address,
    rentalPrice,
    id,
  } = car;

  useEffect(() => {
    if (favourites !== null) {
      const carIsFavourite = favourites.some(e => e.id === id);

      setIsFavourite(carIsFavourite);
    }
  }, [favourites, id]);

  const addressPart = address.split(', ');
  const carLevel = rentalCompany.split(' ');
  const typeCar = type.toLowerCase();
  const additionalFunctions = functionalities[0].split(' ').slice(0, 2);

  return (
    <StyledLiCar>
      <div>
        <StyledImg src={img} alt={model} />
        <StyledIconBtn onClick={handleToggleFavourite}>
          {!isFavourite && <IconHeart />}
          {isFavourite && <IconActiveHeart />}
        </StyledIconBtn>

        <div>
          <StyledTitle>
            <h3>
              {make} {model && <span>{model}</span>}, {year}
            </h3>
            <p>{rentalPrice}</p>
          </StyledTitle>
          <StyledDescription>
            <ul>
              <li>
                <p>{addressPart[1]}</p>
              </li>
              <li>
                <p>{addressPart[2]}</p>
              </li>
              <li>
                <p>{rentalCompany}</p>
              </li>
              <li>
                <p>{carLevel[0]}</p>
              </li>
            </ul>
            <ul>
              <li>
                <StyledCarType>{typeCar}</StyledCarType>
              </li>
              <li>
                <p>{model}</p>
              </li>
              <li>
                <p>{id}</p>
              </li>
              <li>
                <p>{additionalFunctions.join(' ')}</p>
              </li>
            </ul>
          </StyledDescription>
        </div>
      </div>
      <Button text="Learn more" car={car} />
    </StyledLiCar>
  );
};
