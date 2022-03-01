import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { CardCloseIcon } from "../add-card/add-card.styles";

const CardSheet = css`
  border-radius: 32px;
  cursor: grab;
  height: 120%;
  position: absolute;
  width: calc(100% - 40px);
  padding: 20px;
  will-change: transform;
  box-shadow: 0 1.1px 3.6px rgba(0, 0, 0, 0.044),
    0 3px 10px rgba(0, 0, 0, 0.048), 0 7.2px 24.1px rgba(0, 0, 0, 0.047),
    0 24px 80px rgba(0, 0, 0, 0.06);
`;

const getGridCols = (index, length) => {
  const maxPlaces = length % 3 === 0 ? length : length - (length % 3) + 3;

  if (maxPlaces - index === 1) {
    if (maxPlaces % length === 0) {
      return "5 / 7";
    }
  } else if (maxPlaces - index === 2) {
    if (maxPlaces % length === 1) {
      return "4 / 7";
    } else if (maxPlaces % length === 0) {
      return "3 / 5";
    }
  }
  if (maxPlaces - index === 3) {
    if (maxPlaces % length === 2) {
      return "1 / 7";
    } else if (maxPlaces % length === 1) {
      return "1 / 4";
    } else if (maxPlaces % length === 0) {
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

export const CardContainer = styled.div`
  font-weight: 600;
  align-items: center;
  background-color: ${({ fill }) => fill};
  border-radius: 30px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  grid-column: ${({ length, index }) => getGridCols(length, index)};
`;

export const CardAvatar = styled(animated.img)`
  border-radius: 30px;
  transform-origin: 50% 0;
  width: 80%;
  user-select: none;
  -webkit-user-select: none;
  will-change: transform;
`;

export const CardTitle = styled(animated.h2)`
  color: #f1f1f1;
  font-family: "Open Sans";
  font-size: 22px;
  top: 286px;
  position: absolute;
  user-select: none;
  -webkit-user-select: none;
  font-weight: 700;
  letter-spacing: 2.2px;
  background-color: ${({ opacity }) => opacity};
  padding: 10px 5px 40px 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CardTopSheet = styled(animated.div)`
  ${CardSheet}
  background-color: #f1f1f1;

  div {
    pointer-events: none;

    p {
      font-size: 18px;
      line-height: 22px;
      text-align: justify;
      color: #424242;

      span {
        font-size: 32px;
      }
    }
  }
`;

export const CardBottomSheet = styled(animated.div)`
  ${CardSheet}
  background-color: #303030;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 10px 0;
    font-weight: 600;
    font-size: 64px;
    color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0;
  }
`;

export const CardButton = styled(Link)`
  padding: 18px 28px;
  letter-spacing: 2px;
  margin: auto;
  background-color: ${({ fill }) => fill};
  color: #f1f1f1;
  text-transform: uppercase;
  border-radius: 20px;
  font-size: 20px;
  transition: all 350ms ease-out;
  font-weight: 700;

  &:hover {
    color: ${({ fill }) => fill};
    background-color: #f1f1f1;
  }
`;

export const CardDelete = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
  color: #f1f1f1;
  overflow: hidden;
  transition: all 350ms ease-out;
  cursor: pointer;

  &:hover {
    svg {
      border-radius: 50%;
      color: ${({ fill }) => `${fill}`};
      background-color: #f1f1f1;
    }
  }

  svg {
    transition: all 350ms ease-out;
    font-size: 40px;
  }
`;
