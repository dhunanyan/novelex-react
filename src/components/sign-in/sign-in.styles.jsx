import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const SignInContainer = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: #a0bcdb;
  border-radius: 10px;
  padding: 20px;
  border-bottom: 3px solid #062e48;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SignInImgContainer = styled.div`
  width: 125px;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  img {
    width: 100%;
  }
`;

export const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45px 0 0 0;
`;

export const SignInTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #062e48;
`;

export const SignInDescr = styled.p`
  font-size: 16px;
  margin: 10px 0 20px 0;
  color: #424242;
`;

export const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SignInFormButton = styled(CustomButton)`
  background-color: #54698d;
  margin: 10px 0;
  border: 1px solid #54698d;
  color: #f1f1f1;
  font-size: 24px;
  padding: 25px 45px;
  min-width: 100%;
  margin: 10px auto;

  &:hover {
    background-color: #f1f1f1;
    color: #54698d;
  }
`;
