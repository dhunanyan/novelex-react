import styled, { css } from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #c7c5f4, #776bcc);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 120px 0;
  margin: 70px 0 0 0;
`;

export const SignInScreen = styled.div`
  position: relative;
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #5c5696;
  border-radius: 10px;
  overflow: hidden;
`;

export const SignInLogo = styled.div`
  width: 120px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;

  img {
    width: 100%;
  }
`;

export const SignInScreenContent = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
`;

export const SignInScreenBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
`;

const SignInScreenBackgroundShape = css`
  transform: rotate(45deg);
  position: absolute;
`;

export const SignInScreenBackgroundShape1 = styled.span`
  ${SignInScreenBackgroundShape};
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
`;

export const SignInScreenBackgroundShape2 = styled.span`
  ${SignInScreenBackgroundShape};
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
`;

export const SignInScreenBackgroundShape3 = styled.span`
  ${SignInScreenBackgroundShape};
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
`;

export const SignInScreenBackgroundShape4 = styled.span`
  ${SignInScreenBackgroundShape};
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
`;

export const SignInForm = styled.form`
  width: 320px;
  padding: 30px;
  padding-top: 156px;
`;

export const SignInField = styled.div`
  padding: 20px 0px;
  position: relative;

  svg {
    position: absolute;
    top: 30px;
    color: #7875b5;
  }
`;

export const SignInInput = styled.input`
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    border-bottom-color: #6a679e;
  }
`;

export const SignInSubmit = styled.button`
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;

  &:active,
  &:focus,
  &:hover {
    border-color: #6a679e;
    outline: none;
  }

  svg {
    font-size: 24px;
    margin-left: auto;
    color: #7875b5;
  }
`;

export const SignInSocial = styled.div`
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
`;

export const SignInSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    padding: 20px 10px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0px 0px 8px #7875b5;

    &:hover {
      transform: scale(1.5);
    }
  }
`;
