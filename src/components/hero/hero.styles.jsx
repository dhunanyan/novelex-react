import styled from "styled-components";

import homeHeroImg from "../../assets/home/hero.jpg";
import homeAboutImg from "../../assets/about/hero.jpg";
import homeServicesImg from "../../assets/services/hero.jpg";
import homeCareersImg from "../../assets/careers/hero.jpg";
import homeLifeImg from "../../assets/life/hero.jpg";
import { Container } from "../../Global.styles";

const getHeroImageUrl = (heroName) =>
  heroName === "home"
    ? homeHeroImg
    : heroName === "about"
    ? homeAboutImg
    : heroName === "services"
    ? homeServicesImg
    : heroName === "careers"
    ? homeCareersImg
    : homeLifeImg;

export const HeroWrapper = styled.section`
  margin: 70px 0 0 0;
  width: 100%;
  background-image: ${({ heroName }) => `url('${getHeroImageUrl(heroName)}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
`;

export const HeroContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
`;

export const HeroContentContainer = styled.div`
  background-color: rgba(48, 48, 48, 0.9);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  padding: 18px 60px 18px 18px;
  border-radius: 40px;
`;

export const HeroContent = styled.div`
  max-width: 700px;
  padding: 330px 0 80px 0;
  z-index: 1;

  @media (max-width: 404px) {
    padding: 330px 0 40px 0;
  }
`;

export const HeroSubtitle = styled.h4`
  color: #e1e1e1;
  display: flex;
  align-items: center;
`;

export const HeroLine = styled.span`
  display: inline-block;
  width: 100px;
  height: 1px;
  background-color: #fff;
  margin: 0 0 0 10px;

  @media (max-width: 318px) {
    width: 70px;
  }
`;

export const HeroTitle = styled.h1`
  color: #e1e1e1;
  font-size: 70px;
  font-weight: 700;

  border-radius: 30px;

  @media (max-width: 991px) {
    font-size: 56px;
  }

  @media (max-width: 420px) {
    font-size: 50px;
  }

  @media (max-width: 370px) {
    font-size: 40px;
  }
`;
