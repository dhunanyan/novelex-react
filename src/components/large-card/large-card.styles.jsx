import styled from "styled-components";
import { Container } from "../../Global.styles";
import { CardButton } from "../card/card.styles";

export const LargeCardWrapper = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const LargeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  position: relative;
`;

export const LargeCardImg = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 500px;

  img {
    width: 100%;
  }
`;

export const LargeCardContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const LargeCardCotnent = styled.div`
  width: calc(100% - 30px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #303030;
  position: relative;
  z-index: 3;
  border-radius: 30px;
`;

export const LargeCardTitle = styled.h2`
  position: absolute;
  z-index: 0;
  left: 50%;
  top: -25px;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2.2px;
  background-color: ${({ opacity }) => opacity};
  padding: 10px 20px 10px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const LargeCardDescr = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  color: #f1f1f1;
`;

export const LargeCardButton = styled(CardButton)`
  margin: 10px 0 0 auto;
  background-color: ${({ fill }) => fill};
  color: #f1f1f1;
  &:hover {
    color: ${({ fill }) => fill};
    background-color: #f1f1f1;
  }
`;
