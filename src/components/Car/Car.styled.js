import styled from 'styled-components';

/* .iconHeart {
  path {
    stroke: #ffffff;
  }
  &.favourite {
    path {
      stroke: #3470ff;
      fill: #3470ff;
    }
  }
}
.img {
  width: 274px;
  height: 268px;
} */

export const StyledLiCar = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

// export const StyledIcon = styled.svg`
//   path {
//     stroke: black;
//   }
// `;

export const StyledCarCard = styled.div`
  height: 426px;
  min-width: 274px;
`;
export const StyledWrapper = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const StyledImg = styled.img`
  width: 100%;
  min-height: 268px;
  /* background-image: url(imageErrorDesktop.af332219.png); */

  object-fit: cover;
  object-position: center;
`;

export const StyledWrapperText = styled.div`
  flex-direction: column;
  gap: 4px;
  display: flex;
`;

export const StyledTitle = styled.h3`
  /* margin-top: 14px; */
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const StyledDescription = styled.p`
  /* flex-direction: column; */
  /* gap: 4px; */
  margin-top: 8px;
  display: flex;
  overflow: hidden;
  position: relative;
  height: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledButton = styled.button`
  text-align: center;
  color: var(--primary-color-white);
  background-color: var(--primary-color-blue);
  border-radius: 12px;
  height: 44px;
  border: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 28px;
`;
