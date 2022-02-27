import styled from "styled-components";
import { Container } from "../../Global.styles";

const getGridProps = (gridNames) => {
  const grids = [];
  gridNames.forEach((name) => {
    if (name.length > 0) {
      grids.push(name);
    }
  });
  return `'${grids[0]} ${grids[1]} ${grids[2]}'`;
};

export const CardsContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  grid-gap: 30px;
  grid-template-areas: ${({ names }) => getGridProps(names)};
  grid-template-columns:
    minmax(270px, 1fr)
    minmax(270px, 1fr)
    minmax(270px, 1fr);
  grid-template-rows: minmax(500px, 1fr);
`;

export const CardsWrapper = styled.div`
  background-image: linear-gradient(135deg, #227cb1, #f3af64);
`;
