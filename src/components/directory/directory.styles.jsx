import styled, { css } from "styled-components";

import MenuItem from "../menu-item/menu-item.component";
import { Container } from "../../Global.styles";

const DirectoryItemHome = css`
  grid-area: home;
`;

const DirectoryItemAbout = css`
  grid-area: about;
`;

const DirectoryItemServices = css`
  grid-area: services;
`;

const DirectoryItemCareers = css`
  grid-area: careers;
`;

const DirectoryItemLife = css`
  grid-area: life;
`;

const chooseDirectoryItemType = ({ title }) => {
  if (title === "home") {
    return DirectoryItemHome;
  } else if (title === "about") {
    return DirectoryItemAbout;
  } else if (title === "services") {
    return DirectoryItemServices;
  } else if (title === "careers") {
    return DirectoryItemCareers;
  } else if (title === "life") {
    return DirectoryItemLife;
  }
};

export const DirectoryContainer = styled(Container)`
  padding: 130px 60px 60px 60px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const DirectoryItem = styled(MenuItem)`
  ${chooseDirectoryItemType}
`;

export const DirectoryMenu = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns:
    minmax(90px, 1fr)
    minmax(90px, 1fr)
    minmax(90px, 1fr)
    minmax(90px, 1fr)
    minmax(90px, 1fr)
    minmax(90px, 1fr);
  grid-template-rows: minmax(150px, 270px) minmax(235px, 270px);
  grid-template-areas:
    "home home home about about about"
    "services services careers careers life life";

  @media (max-width: 768px) {
    grid-template-rows:
      minmax(100px, 300px)
      minmax(100px, 300px)
      minmax(100px, 300px);
    grid-template-columns:
      minmax(90px, 1fr)
      minmax(90px, 1fr);
    grid-template-areas:
      "home home"
      "about life"
      "services careers";
  }

  @media (max-width: 550px) {
    grid-template-rows:
      minmax(100px, 300px)
      minmax(100px, 300px)
      minmax(100px, 300px)
      minmax(100px, 300px)
      minmax(100px, 300px);
    grid-template-columns: minmax(90px, 1fr);
    grid-template-areas:
      "home"
      "about"
      "services"
      "careers"
      "life";
  }
`;
