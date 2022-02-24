import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderImg,
  HeaderLogo,
  HeaderList,
  HeaderItem,
  HeaderLink,
} from "./header.styles";

import logoUrl from "../../assets/favicon.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderImg to="/">
          <HeaderLogo src={logoUrl} />
        </HeaderImg>

        <HeaderList>
          <HeaderItem>
            <HeaderLink to="/about">Who we are</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink to="/life">Life at NovelEx</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink to="/services">Services</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink to="/careers">Careers</HeaderLink>
          </HeaderItem>
        </HeaderList>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
