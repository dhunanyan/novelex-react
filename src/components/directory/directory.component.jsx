import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import {
  DirectoryContainer,
  DirectoryMenu,
  DirectoryItem,
} from "./directory.styles";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryContainer>
      <DirectoryMenu>
        {sections.map(({ id, index = 0, ...otherSectionProps }) => (
          <DirectoryItem key={id} {...otherSectionProps} />
        ))}
      </DirectoryMenu>
    </DirectoryContainer>
  );
};

export default Directory;
