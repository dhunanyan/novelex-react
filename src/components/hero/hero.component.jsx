import React from "react";

import {
  HeroContent,
  HeroWrapper,
  HeroTitle,
  HeroSubtitle,
  HeroLine,
  HeroContainer,
  HeroContentContainer,
} from "./hero.styles";

const Hero = ({ hero }) => {
  const { heroName, heroTitle, heroDescr } = hero;

  return (
    <HeroWrapper heroName={heroName}>
      <HeroContainer>
        <HeroContent>
          <HeroContentContainer>
            <HeroSubtitle>
              {heroDescr}
              <HeroLine></HeroLine>
            </HeroSubtitle>
            <HeroTitle>{heroTitle}</HeroTitle>
          </HeroContentContainer>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
