import styled from "styled-components";
import { Container } from "../../Global.styles";

const getGridRowsCount = (cardNames) => {
  return cardNames.length;
};

const getGridRowsAttr = (getGridRowsCount) => {
  const arr = [];
  for (let i = 0; i < getGridRowsCount; i++) {
    if (i % 3 === 0) arr.push("minmax(500px, 1fr)");
  }
  const result = arr.join(" ");
  return result;
};

const getGridCols = (index, length) => {
  const maxPositions = length % 3 === 0 ? length : length - (length % 3) + 3;
  if (maxPositions - index === 1) {
    if (maxPositions % length === 0) {
      return "5 / 7";
    }
  } else if (maxPositions - index === 2) {
    if (maxPositions % length === 1) {
      return "4 / 7";
    } else if (maxPositions % length === 0) {
      return "3 / 5";
    }
  } else if (maxPositions - index === 3) {
    if (maxPositions % length === 2) {
      return "1 / 7";
    } else if (maxPositions % length === 1) {
      return "1 / 4";
    } else if (maxPositions % length === 0) {
      return "1 / 3";
    }
  } else {
    if (index % 3 === 0) {
      return "1 / 3";
    } else if (index % 3 === 1) {
      return "3 / 5";
    } else if (index % 3 === 2) {
      return "5 / 7";
    }
  }
};

const getGridRows = (index, length) => {
  const maxPositions =
    Math.floor(length / 3) === 0 ? 1 : Math.floor(length / 3);
  return `${Math.floor(index / 3) + 1} / ${Math.floor(index / 3) + 2}`;
};

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
  grid-template-rows: ${({ cardNames }) => {
    getGridRowsAttr(getGridRowsCount(cardNames));
  }};
  position: relative;
`;

export const CardsWrapper = styled.div`
  background-image: linear-gradient(135deg, #227cb1, #f3af64);
`;

export const AddButton = styled.button`
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
  grid-row: ${({ index, length }) => getGridRows(index, length)};
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
