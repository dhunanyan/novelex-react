import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import { Container } from "../../Global.styles";
import ResultAdd from "../../ResultAdd";

import { SignInPageContainer } from "./sign-in.styles";

const Signin = () => (
  <SignInPageContainer>
    <Container style={{ marginTop: "70px" }}>
      <ResultAdd />
    </Container>
    <SignIn />
  </SignInPageContainer>
);

export default Signin;
