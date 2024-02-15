import React from 'react';

import { StyledUlCar } from './CarList.styled';
import { Car } from 'components/Car/Car';

import carJson from '../../cars';

const cars = carJson;

const CarList = () => {
  return (
    <StyledUlCar>
      {cars.map(car => {
        return (
          <Car
            key={car.id}
            model={car.model}
            make={car.make}
            year={car.year}
            img={car.img}
            rentalPrice={car.rentalPrice}
            description={car.description}
            fuelConsumption={car.fuelConsumption}
            engineSize={car.engineSize}
            accessories={car.accessories}
            functionalities={car.functionalities}
            // favourite={false}
            rentalCompany={car.rentalCompany}
            address={car.address}
            rentalConditions={car.rentalConditions}
            mileage={car.mileage}
          />
        );
      })}
    </StyledUlCar>
  );
};

export default CarList;
