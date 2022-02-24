import styled, { css } from "styled-components";

import MenuItem from "../menu-item/menu-item.component";

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

export const DirectoryItem = styled(MenuItem)`
  ${chooseDirectoryItemType}
`;

export const DirectoryMenu = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns:
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px);
  grid-template-rows: minmax(150px, 300px) minmax(275px, 450px);
  grid-template-areas:
    "home home home about about about"
    "services services careers careers life life";

  @media (max-width: 768px) {
    grid-template-rows:
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px);
    grid-template-columns:
      minmax(90px, 500px)
      minmax(90px, 500px);
    grid-template-areas:
      "hats hats"
      "jackets sneakers"
      "womens womens"
      "mens mens";
  }

  @media (max-width: 550px) {
    grid-template-rows:
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px);
    grid-template-columns: minmax(90px, 1fr);
    grid-template-areas:
      "hats"
      "jackets"
      "sneakers"
      "womens"
      "mens";
  }
`;
