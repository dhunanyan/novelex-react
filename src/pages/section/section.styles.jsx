import styled from "styled-components";
import { Container } from "../../Global.styles";
import { Link } from "react-router-dom";

export const CardsContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  grid-gap: 30px;
  grid-template-areas: ${({ cardNames }) => `' ${cardNames.join(" ")} '`};
  grid-template-columns:
    minmax(270px, 1fr)
    minmax(270px, 1fr)
    minmax(270px, 1fr);
  grid-template-rows: minmax(500px, 1fr);
`;

export const CardsWrapper = styled.div`
  background-image: linear-gradient(135deg, #227cb1, #f3af64);
  position: relative;
`;

export const AddButton = styled(Link)`
  position: absolute;
  top: 50%;
  left: calc(100% - 90px);
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    line-height: 22px;
    margin-top: 11px;
  }

  span {
    line-height: 0;
    svg {
      font-size: 54px;
    }
  }
`;
