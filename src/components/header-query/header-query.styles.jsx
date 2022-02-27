import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const contentOpen = css`
  margin-top: 0px;
  height: max-content;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 350ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  pointer-events: all;
`;

const contentTextOpen = css`
  transform: translateY(-0);
  visibility: visible;
  opacity: 1;
  transition: opacity 0.4s ease-out;
`;

const arrowOpen = css`
  color: rgba(255, 255, 255, 1);
  transform: rotate(180deg);
`;

const AccordionTitleCSS = css`
  height: 30px;
  width: calc(100% - 20px);
  background-color: rgba(0, 0, 0, 0.4);
  color: #ffddcc;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2;
  font-weight: lighter;
  padding: 10px;
  border-radius: 4px;
  margin-top: 2px;
  transition: all 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 200;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.55);
  }

  p {
    margin-left: 10px;
  }
`;

export const HeaderQueryContainer = styled.div`
  height: calc(100vh - 130px);
  padding: 30px 5px;
  font-family: "quicksand";
  font-weight: lighter;
  background: rgba(92, 129, 202, 1);
  background: -moz-linear-gradient(
    left,
    rgba(92, 129, 202, 1) 0%,
    rgba(249, 140, 112, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(92, 129, 202, 1) 0%,
    rgba(249, 140, 112, 1) 100%
  );
  position: fixed;
  top: 70px;
  width: ${({ isActive }) =>
    isActive ? "calc(100% - 10px)" : "calc(100% - 10px)"};
  left: ${({ isActive }) => (isActive ? "-100%" : "0px")};
  transition: all 0.25s cubic-bezier(0.96, 0.99, 0.41, 0.92);
  overflow-y: auto;
`;

export const AccordionContainer = styled.div`
  box-shadow: 0px 13px 23px -13px rgba(0, 0, 0, 0.5);
  max-width: 768px;
  background-color: transparent;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
  }
`;

export const AccordionTitle = styled.h2`
  ${AccordionTitleCSS}
`;

export const AccordionButton = styled.button`
  ${AccordionTitleCSS}
  height: 50px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const AccordionContent = styled.div`
  height: 30px;
  width: 100%;
  background-color: transparent;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: -30px;
  position: relative;
  z-index: 100;
  pointer-events: all;
  transition: all 200ms cubic-bezier(0.08, 1.09, 0.32, 1.275);

  ${({ isOpen }) => (isOpen ? contentOpen : null)}
`;

export const AccordionContentText = styled.div`
  width: calc(100% - 10px);
  padding: 5px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-50px);

  ${({ isOpen }) => (isOpen ? contentTextOpen : null)}
  transition: all 200ms ease-in;
`;

export const AccordionLink = styled(Link)`
  height: 30px;
  width: calc(100% - 20px);
  background-color: rgba(90, 85, 85, 0.4);
  color: #ffddcc;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2;
  font-weight: lighter;
  padding: 10px;
  border-radius: 4px;
  margin-top: 2px;

  &:hover {
    background-color: rgba(90, 85, 85, 0.6);
  }
`;

export const AccordionArrowContainer = styled.div`
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.6s cubic-bezier(0.08, 1.09, 0.32, 1.275);
    ${({ isOpen }) => (isOpen ? arrowOpen : null)}
  }
`;
