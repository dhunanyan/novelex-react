import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";

import { emailSignInStart } from "../../redux/user/user.actions";
import Logo from "../../assets/logo.png";

import {
  SignInTitle,
  SignInDescr,
  SignInFormContainer,
  SignInContainer,
  SignInContent,
  SignInFormButton,
  SignInImgContainer,
} from "./sign-in.styles";

const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { email, password } = userData;
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInImgContainer>
        <img src={Logo} alt="Logo" />
      </SignInImgContainer>
      <SignInContent>
        <SignInTitle>Wellcome back Irina!</SignInTitle>
        <SignInDescr>
          Please Sign in so you can make the changes, you wish.
        </SignInDescr>
      </SignInContent>

      <SignInFormContainer onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="e-mail"
          required
          autoComplete="on"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
          autoComplete="on"
        />

        <SignInFormButton type="submit">Sign in</SignInFormButton>
      </SignInFormContainer>
    </SignInContainer>
  );
};

export default SignIn;
