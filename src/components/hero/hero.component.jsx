import React from "react";

import { Container } from "../../Global.styles";
import {
  HeroContent,
  HeroWrapper,
  HeroTitle,
  HeroSubtitle,
  HeroLine,
} from "./hero.styles";

const Hero = ({ hero }) => {
  const { heroName, heroTitle, heroDescr } = hero;

  return (
    <HeroWrapper heroName={heroName}>
      <Container>
        <HeroContent>
          <HeroSubtitle>
            {heroDescr}
            <HeroLine></HeroLine>
          </HeroSubtitle>
          <HeroTitle>{heroTitle}</HeroTitle>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
