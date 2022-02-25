import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderImg,
  HeaderLogo,
  HeaderList,
  HeaderItem,
  HeaderLink,
  HeaderButton,
} from "./header.styles";

import logoUrl from "../../assets/favicon.png";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const signOutStartDispatch = () => dispatch(signOutStart());
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
          {currentUser ? (
            <HeaderItem>
              <HeaderButton onClick={signOutStartDispatch}>
                Sign out
              </HeaderButton>
            </HeaderItem>
          ) : null}
        </HeaderList>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
