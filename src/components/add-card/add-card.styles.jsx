import styled, { css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

export const CardAddContainer = styled.div`
  position: absolute;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ opacity }) => `${opacity.replace("0.568", "8")}`};
  padding: 40px 20px 20px 20px;
  border-radius: 20px;
  border: 4px solid #525252;
  min-width: 300px;

  input[type="file"] {
    color: rgba(0, 0, 0, 0);
  }

  progress[value] {
    width: 100%;
    height: 35px;
  }
`;

export const CardInput = styled.input`
  background: none;
  background-color: #f8f8f8;
  color: $sub-color;
  font-size: 18px;
  padding: 15px;
  display: block;
  min-width: calc(100% - 30px);
  border: none;
  margin: 10px 0;
  border-radius: 8px;
  border-bottom: 4px solid #535353;

  &:focus {
    outline: none;
  }
`;

export const FormTextArea = styled.textarea`
  background: none;
  background-color: #f8f8f8;
  color: $sub-color;
  font-size: 18px;
  padding: 15px;
  display: block;
  min-width: calc(100% - 30px);
  min-height: 100px;
  border: none;
  margin: 10px 0;
  border-radius: 8px;
  border-bottom: 4px solid #535353;

  &:focus {
    outline: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const SubmitButton = styled(CustomButton)`
  &[type="submit"] {
    margin: 0 0 0 auto;
    min-width: 160px;
    min-width: 50%;
  }
`;

export const JustAButton = styled(CustomButton)`
  &[type="button"] {
    margin: 0 auto 0 0;
    min-width: 160px;
    min-width: 50%;
  }
`;

export const CardCloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;

  color: #535353;
  overflow: hidden;
  transition: all 350ms ease-out;
  cursor: pointer;

  &:hover {
    svg {
      border-radius: 50%;
      color: ${({ opacity }) => `${opacity.replace("0.568", "8")}`};
      background-color: #535353;
    }
  }

  svg {
    transition: all 350ms ease-out;
    font-size: 30px;
  }
`;

export const CardResizeIcon = styled.div`
  pointer-events: none;
  font-size: 30px;
  position: absolute;
  bottom: 275px;
  right: 24px;
  z-index: 4;
  color: #535353;
`;
