import React from 'react';

// import css from './Car.module.css';
import { ReactComponent as IconHeart } from '../../assets/heart.svg';
import {
  StyledButton,
  StyledCarCard,
  StyledDescription,
  StyledImg,
  StyledLiCar,
  StyledTitle,
  StyledWrapper,
  StyledWrapperText,
} from './Car.styled';

export const Car = ({
  id,
  year,
  make,
  model,
  rentalPrice,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  return (
    <StyledLiCar>
      <StyledCarCard>
        <StyledWrapper>
          <StyledImg src={img} alt={model} />
          <button>
            <IconHeart />
          </button>
        </StyledWrapper>
        <StyledWrapperText>
          <StyledTitle>
            {make} {model}, {year} {rentalPrice}
          </StyledTitle>
          <StyledDescription>
            {description} {fuelConsumption} {engineSize} {accessories}
            {functionalities} {rentalCompany} {address} {rentalConditions}
            {mileage}
          </StyledDescription>
          <StyledButton>Learn more</StyledButton>
        </StyledWrapperText>
      </StyledCarCard>
    </StyledLiCar>
  );
};
