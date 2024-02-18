import {
  StyledCloseBtn,
  StyledConditionsList,
  StyledImgModal,
  StyledModal,
  StyledModalSmallDescription,
  StyledOverlayForModal,
  StyledWrappedModal,
} from './Modal.styled';

import { ReactComponent as IconModalCloseBtn } from '../../assets/modal-close-btn.svg';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCarInfo } from '../../redux/cars.selectors';
import { setIsOpenModal } from '../../redux/slice/isOpenModalSlice';
import {
  StyledCarType,
  StyledDescription,
  StyledTitle,
} from 'components/Car/Car.styled';
import Button from 'components/Button/Button';

export const Modal = () => {
  const carInfo = useSelector(selectCarInfo);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(setIsOpenModal(false));
  }, [dispatch]);

  const onOverlayClick = e => e.target === e.currentTarget && closeModal();

  useEffect(() => {
    const onEsc = e => {
      e.key === 'Escape' && closeModal();
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [closeModal]);

  const {
    make,
    year,
    model,
    type,
    img,
    address,
    engineSize,
    fuelConsumption,
    id,
    description,
    accessories,
    functionalities,
    mileage,
    rentalConditions,
    rentalPrice,
  } = carInfo;

  const addressParts = address?.split(', ');
  const typeCar = type.toLowerCase();

  const uiMileage = mileage.toLocaleString('en-US', { style: 'decimal' });

  const parseCondition = condition => {
    const [key, value] = condition.split(':').map(part => part.trim());
    return { key, value };
  };
  const conditionsArray = rentalConditions.split('\n');
  const { key: text, value: ageVal } = parseCondition(conditionsArray[0]);

  return (
    <StyledOverlayForModal>
      <StyledWrappedModal onClick={onOverlayClick}>
        <StyledModal>
          <StyledImgModal src={img} alt={make} />
          <StyledTitle>
            <h2>
              {make} {model && <span>{model}</span>}, {year}
            </h2>
          </StyledTitle>
          <StyledDescription>
            <ul>
              <li>
                <p>{addressParts[1]}</p>
              </li>
              <li>
                <p>{addressParts[2]}</p>
              </li>
              <li>
                <p>Id: {id}</p>
              </li>
              <li>
                <p>Year: {year}</p>
              </li>
              <li>
                <StyledCarType>Type: {typeCar}</StyledCarType>
              </li>
            </ul>
            <ul>
              <li>
                <p>Fuel Consumption: {fuelConsumption}</p>
              </li>
              <li>
                <p>Engine Size: {engineSize}</p>
              </li>
            </ul>
          </StyledDescription>

          <StyledModalSmallDescription>
            {description}
          </StyledModalSmallDescription>

          <div className="additional-car-info">
            <h3>Accessories and functionalities:</h3>
            <StyledDescription>
              <ul>
                {accessories.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <ul>
                {functionalities.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </StyledDescription>
          </div>

          <div>
            <h3>Rental Conditions:</h3>
            <StyledConditionsList>
              {conditionsArray.map((condition, index) => (
                <li key={index}>
                  <p>
                    {index === 0 ? (
                      <>
                        {text}: <span>{ageVal}</span>
                      </>
                    ) : (
                      condition
                    )}
                  </p>
                </li>
              ))}
              <li>
                <p>
                  Mileage: <span>{uiMileage}</span>
                </p>
              </li>
              <li>
                <p>
                  Price: <span>{rentalPrice.slice(1)}$</span>
                </p>
              </li>
            </StyledConditionsList>
          </div>
          <div>
            <Button text="Rental car" onClick={closeModal} />

            <StyledCloseBtn onClick={closeModal}>
              <IconModalCloseBtn />
            </StyledCloseBtn>
          </div>
        </StyledModal>
      </StyledWrappedModal>
    </StyledOverlayForModal>
  );
};
