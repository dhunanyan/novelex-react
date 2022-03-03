import styled from "styled-components";
import { Container } from "../../Global.styles";

export const CardsContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns:
    minmax(135px, 1fr)
    minmax(135px, 1fr)
    minmax(135px, 1fr)
    minmax(135px, 1fr)
    minmax(135px, 1fr)
    minmax(135px, 1fr);
  grid-template-rows: ${({ cardNames }) => cardNames};
  position: relative;
`;

export const CardsWrapper = styled.div`
  background-image: linear-gradient(135deg, #227cb1, #f3af64);
`;

const getGridCols = (gridCol, currentUser) => {
  return gridCol === 1 ? 1 : gridCol === 2 ? 3 : gridCol === 3 ? 5 : null;
};

export const getSize = (size, gridCol, currentUser) => {
  return ((gridCol === 2 && size === 2) || (gridCol === 1 && size === 3)) &&
    currentUser
    ? size === 1
      ? 2
      : size === 2
      ? 2
      : size === 3
      ? 3
      : null
    : size === 1
    ? 2
    : size === 2
    ? 4
    : size === 3
    ? 6
    : null;
};

export const CardsGridInner = styled.div`
  grid-column: ${({ gridCol, size, index, length, currentUser }) => {
    console.log(size, index, length, currentUser);
    return `${getGridCols(gridCol)} / span ${getSize(
      size,
      gridCol,
      currentUser
    )}`;
  }};
  grid-row: ${({ gridRow }) => gridRow};
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  color: #525252;
  transition: all 200ms ease-out;
  grid-area: 4 / 7;
  height: 540px;
  padding: 20px 40px;
  grid-column: ${({ index, length }) => getGridCols(index, length)};
  grid-row: ${({ gridRow }) => gridRow};
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
