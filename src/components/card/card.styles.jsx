import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { MdArrowDropDownCircle as Hand } from "react-icons/md";

export const HandIconContainer = styled.h3`
  transform: ${({ isRotated }) => (isRotated ? "rotate(0)" : "rotate(180deg)")};
  transition: all 450ms ease-out;
`;

export const HandIcon = styled(Hand)`
  color: ${({ opacity }) => `${opacity.replace("0.568", "0.93")}`};
`;

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

export const CardContainer = styled.div`
  margin: 0 15px;
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
  padding: 20px 40px;
  width: 100%;
`;

export const CardAvatar = styled(animated.div)`
  border-radius: 30px;
  transform-origin: 50% 0;
  width: 100%;
  height: calc(100% - 240px);
  user-select: none;
  -webkit-user-select: none;
  will-change: transform;
  overflow: hidden;
`;

export const CardAvatarImg = styled.div`
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
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
  overflow: hidden;

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

export const CardTopSheetLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
`;

export const CardBottomSheet = styled(animated.button)`
  ${CardSheet}
  background-color: #303030;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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

export const CardButtonsContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

export const CardDeleteEdit = css`
  overflow: hidden;
  transition: all 150ms ease-out;
  cursor: pointer;
  border-radius: 20px;
  width: 80px;
  height: 80px;
  background: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  color: #535353;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: ${({ fill }) => fill};
  }

  svg {
    transition: all 150ms ease-out;
    font-size: 60px;
  }
`;

export const CardDelete = styled.div`
  ${CardDeleteEdit}
`;

export const CardEdit = styled.div`
  ${CardDeleteEdit}
`;
