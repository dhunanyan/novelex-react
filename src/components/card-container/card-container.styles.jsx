import styled from "styled-components";
import { Container } from "../../Global.styles";

export const CardsContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  grid-gap: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardsWrapper = styled.div`
  background-image: linear-gradient(135deg, #227cb1, #f3af64);
`;

// const getGridCols = (gridCol, currentUser, size) => {
//   if (!currentUser) {
//     if (size === 1) {
//       return gridCol === 1 ? 1 : gridCol === 2 ? 3 : gridCol === 3 ? 5 : null;
//     } else if (size === 2) {
//       return gridCol === 1 ? 1 : gridCol === 2 ? 4 : null;
//     } else if (size === 3) {
//       return 1;
//     }
//   } else {
//     if (size === 1) {
//       return gridCol === 1 ? 1 : gridCol === 2 ? 3 : gridCol === 3 ? 5 : null;
//     } else if (size === 2) {
//       return gridCol === 1 ? 1 : gridCol === 2 ? 3 : null;
//     } else if (size === 3) {
//       return 1;
//     }
//   }
// };

// export const getSize = (size, gridCol, currentUser) => {
//   if (currentUser) {
//     return gridCol === 2
//       ? size === 1
//         ? 2
//         : size === 2
//         ? 4
//         : size === 3
//         ? 3
//         : null
//       : size === 1
//       ? 2
//       : size === 2
//       ? 2
//       : size === 3
//       ? 6
//       : null;
//   } else {
//     return size === 1 ? 2 : size === 2 ? 3 : size === 3 ? 6 : null;
//   }
// };
export const CardsGridInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  width: 100%;
  font-size: 18px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  color: #525252;
  transition: all 200ms ease-out;
  height: 540px;
  padding: 20px 40px;
  background: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: ${({ fill }) => `${fill}`};
  }

  svg {
    font-size: 164px;
  }
`;
