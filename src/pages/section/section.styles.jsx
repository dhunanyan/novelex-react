import styled from "styled-components";
import { Container } from "../../Global.styles";
import { Link } from "react-router-dom";

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
  grid-template-rows: minmax(500px, 1fr);
`;

export const CardsWrapper = styled.div`
  background-image: linear-gradient(135deg, #227cb1, #f3af64);
`;

export const AddButton = styled.button`
  position: absolute;
  top: 50%;
  left: calc(100% - 90px);
  transform: translate(-50%, -50%);
  width: 108px;
  height: 108px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  background-color: ${({ opacity }) => `${opacity.replace("0.568", "0.8")}`};
  color: #303030;
  transition: all 350ms ease-out;
  border: 4px solid #303030;

  &:hover {
    background-color: #303030;
    color: ${({ opacity }) => `${opacity.replace("0.568", "1")}`};
  }

  p {
    line-height: 22px;
    margin-top: 11px;
    font-weight: 700;
  }

  span {
    line-height: 0;
    svg {
      font-size: 54px;
    }
  }
`;
