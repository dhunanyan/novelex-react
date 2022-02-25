import styled, { css } from "styled-components";

const regularButtonStyles = css`
  background-color: #303030;
  color: #f1f1f1;
  border: 1px solid #303030;

  &:hover {
    background-color: #f1f1f1;
    color: #303030;
  }
`;

const invertedButtonStyles = css`
  background-color: #f1f1f1;
  color: #303030;
  border: 1px solid black;

  &:hover {
    background-color: #303030;
    color: #f1f1f1;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #f1f1f1;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #f1f1f1;
    color: #4285f4;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.inverted) {
    return invertedButtonStyles;
  } else {
    return regularButtonStyles;
  }
};

export const CustomButtonContainer = styled.button`
  max-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 10px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: all 350ms ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  ${getButtonStyles}
`;
