import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { emailSignInStart } from "../../redux/user/user.actions";
import logo from "../../assets/logo.png";

import { FaLock as Lock, FaUserAlt as User } from "react-icons/fa";
import { BsChevronRight as Arrow } from "react-icons/bs";

import {
  SignInContainer,
  SignInScreen,
  SignInScreenContent,
  SignInScreenBackground,
  SignInScreenBackgroundShape1,
  SignInScreenBackgroundShape2,
  SignInScreenBackgroundShape3,
  SignInScreenBackgroundShape4,
  SignInForm,
  SignInField,
  SignInInput,
  SignInSubmit,
  SignInSocial,
  SignInSocialIcons,
  SignInLogo,
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
      <SignInScreen>
        <SignInLogo>
          <img src={logo} alt="Logo" />
        </SignInLogo>
        <SignInScreenContent>
          <SignInForm onSubmit={handleSubmit}>
            <SignInField>
              <User />
              <SignInInput
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
                autoComplete="on"
                placeholder="e-mail"
              />
            </SignInField>
            <SignInField>
              <Lock />
              <SignInInput
                placeholder="password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                required
                autoComplete="on"
              />
            </SignInField>
            <SignInSubmit type="submit">
              <span>Log In Now</span>
              <Arrow />
            </SignInSubmit>
          </SignInForm>
          <SignInSocial>
            <h3>log in via</h3>
            <SignInSocialIcons>
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#"></Link>
            </SignInSocialIcons>
          </SignInSocial>
        </SignInScreenContent>
        <SignInScreenBackground>
          <SignInScreenBackgroundShape4 />
          <SignInScreenBackgroundShape3 />
          <SignInScreenBackgroundShape2 />
          <SignInScreenBackgroundShape1 />
        </SignInScreenBackground>
      </SignInScreen>
    </SignInContainer>
  );
};

export default SignIn;
