import React from "react";

import { withRouter } from "../withRouter/withRouter-component";
import { ImLeaf as LifeIcon, ImUsers as AboutIcon } from "react-icons/im";
import { RiCustomerServiceFill as CareersIcon } from "react-icons/ri";
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { AiFillSetting as ServicesIcon } from "react-icons/ai";

import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemImgContainer,
  MenuItemImg,
  MenuItemTitle,
  MenuItemDescr,
} from "./menu-item.styles";

const MenuItem = ({
  title,
  descr,
  imageUrl,
  navigate,
  linkUrl,
  icon,
  className,
}) => {
  const { name, color } = icon;

  return (
    <MenuItemContainer
      className={className}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <MenuItemImgContainer>
        <MenuItemImg imageUrl={imageUrl} />
      </MenuItemImgContainer>

      <MenuItemContent className="icon" color={color}>
        {name === "LifeIcon" ? (
          <LifeIcon style={{ fontSize: "40px" }} />
        ) : name === "CareersIcon" ? (
          <CareersIcon style={{ fontSize: "40px" }} />
        ) : name === "ServicesIcon" ? (
          <ServicesIcon style={{ fontSize: "40px" }} />
        ) : name === "HomeIcon" ? (
          <HomeIcon style={{ fontSize: "40px" }} />
        ) : (
          <AboutIcon style={{ fontSize: "40px" }} />
        )}
      </MenuItemContent>
      <MenuItemTitle className="title">{title}</MenuItemTitle>
      <MenuItemDescr className="text">{descr}</MenuItemDescr>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
