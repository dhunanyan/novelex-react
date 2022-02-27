import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const LinksCSS = css`
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 350ms ease-out;
  font-weight: 700;
  font-size: 20px;
  min-width: max-content;
  text-decoration: none;
  color: #303030;

  &:hover {
    background-color: #303030;
    color: #f1f1f1;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    color: #f1f1f1;

    &:hover {
      background-color: #f1f1f1;
      color: #303030;
    }
  }
`;

export const HeaderWrapper = styled.header`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(241, 241, 241, 0.95);
  color: #303030;
  pointer-events: all;

  &::after {
    content: "";
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(241, 241, 241, 0);
    color: #303030;
    pointer-events: all;
    border-bottom: 1px solid #303030;
    box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const HeaderImg = styled(Link)`
  padding: 8px;
  max-width: 64px;
  position: relative;
  z-index: 9999;
`;

export const HeaderLogo = styled.img`
  width: 100%;
`;

export const HeaderList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  list-style-type: none;
  padding: 0;
  position: relative;
  z-index: 9999;
  width: 100%;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 9997;
    height: 100vh;
    width: 100%;
    top: 70px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    background-color: rgba(116, 116, 116, 0.95);
    transition: all 350ms ease-out;
    pointer-events: none;
    left: ${({ isActive }) => (isActive ? "0" : "-100%")};
  }
`;

export const HeaderItem = styled.li`
  min-width: max-content;
  margin: 0 8px 0 0;

  @media (max-width: 768px) {
    margin: 20px 0;
    opacity: ${({ isFade }) => (isFade ? "1" : "0.0000001")};
    transform: ${({ isFade }) =>
      isFade ? "translateX(0)" : "translateX(-170px)"};
    transition: all 350ms ease-out;
    pointer-events: ${({ isFade }) => (isFade ? "all" : "none")};
  }
`;

export const HeaderLink = styled(Link)`
  ${LinksCSS}
`;

export const HeaderButton = styled.button`
  ${LinksCSS}
  background-color: #54698d;
  color: #f1f1f1;
  border: 2px solid #54698d;
  padding: 6px 13px;

  &:hover {
    color: #54698d;
    background-color: #f1f1f1;
  }
`;

export const HeaderToggle = styled.div`
  font-size: 34px;
  height: 34px;
  width: 34px;
  line-height: 0;
  cursor: pointer;
  position: absolute;
  top: 19px;
  right: 30px;
  display: none;
  z-index: 9999;
  pointer-events: none;
  transition: ${({ headerToggle }) =>
    headerToggle === "bars" ? "all 150ms ease-out" : "all 400ms ease-out"};

  &:hover {
    transform: ${({ headerToggle }) =>
      headerToggle === "bars" ? "translateX(-8px)" : "rotate(270deg)"};
  }

  @media (max-width: 768px) {
    display: block;
    pointer-events: all;
  }
`;
