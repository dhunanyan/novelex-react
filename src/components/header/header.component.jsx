import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import HeaderQuery from "../header-query/header-query.component";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderImg,
  HeaderLogo,
  HeaderList,
  HeaderItem,
  HeaderLink,
  HeaderButton,
  HeaderToggle,
} from "./header.styles";

import logoUrl from "../../assets/logo.png";

import { HiMenuAlt3 as Bars } from "react-icons/hi";
import { FaTimes as Times } from "react-icons/fa";

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Header = ({ bodyLock }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const signOutStartDispatch = () => dispatch(signOutStart());
  const windowSizes = useWindowDimensions();
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleTimesClick = () => {
    setMenuIsActive(false);
    if (bodyLock(!menuIsActive)) {
      bodyLock(!menuIsActive);
    }
  };

  const handleBarsClick = () => {
    setMenuIsActive(true);
    bodyLock(!menuIsActive);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderImg to="/">
          <HeaderLogo src={logoUrl} />
        </HeaderImg>
        {windowSizes.width <= 768 ? (
          <HeaderQuery
            isActive={!menuIsActive}
            signOut={signOutStartDispatch}
            onClick={() => (menuIsActive ? handleTimesClick() : null)}
            currentUser={currentUser}
          />
        ) : (
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
        )}
        {menuIsActive ? (
          <HeaderToggle headerToggle="times" onClick={() => handleTimesClick()}>
            <Times />
          </HeaderToggle>
        ) : (
          <HeaderToggle headerToggle="bars" onClick={() => handleBarsClick()}>
            <Bars />
          </HeaderToggle>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
