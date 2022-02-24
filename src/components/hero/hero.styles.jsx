import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  background-image: ${({ heroImg }) => `url(${heroImg})`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
`;

export const HeroContent = styled.div`
  max-width: 400px;
  padding: 330px 0 80px 0;
  z-index: 1;

  @media (max-width: 404px) {
    padding: 330px 0 40px 0;
  }
`;

export const HeroSubtitle = styled.h4`
  color: #f1f1f1;
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
  color: #f1f1f1;
  font-size: 70px;
  font-weight: 700;

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
