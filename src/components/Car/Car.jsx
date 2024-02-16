import React, { useState } from 'react';

import { ReactComponent as IconHeart } from '../../assets/heart.svg';
import { ReactComponent as IconActiveHeart } from '../../assets/active-heart.svg';

import {
  StyledButton,
  StyledDescription,
  StyledIconBtn,
  StyledImg,
  StyledLiCar,
  StyledTitle,
  SyledCarType,
} from './Car.styled';

const Car = ({
  id,
  year,
  make,
  model,
  rentalPrice,
  img,
  functionalities,
  rentalCompany,
  address,
  type,
}) => {
  const [favourite, setFavourite] = useState(false);

  const handelToggleFavourite = () => {
    setFavourite(!favourite);
  };

  const addressPart = address.split(', ');
  const carLevel = rentalCompany.split(' ');
  const typeCar = type.toLowerCase();
  const additionalFunctions = functionalities[0].split(' ').slice(0, 2);

  return (
    <StyledLiCar>
      <div>
        <StyledImg src={img} alt={model} />
        <StyledIconBtn onClick={() => handelToggleFavourite()}>
          {favourite === false && <IconHeart />}
          {favourite === true && <IconActiveHeart />}
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
                <SyledCarType>{typeCar}</SyledCarType>
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
      <StyledButton>Learn more</StyledButton>
    </StyledLiCar>
  );
};

export default Car;
