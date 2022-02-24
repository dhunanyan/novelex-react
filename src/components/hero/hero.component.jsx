import React from "react";

const Hero = ({ heroTitle, heroDescr, heroImg }) => {
  return (
    <section class="hero" heroImg={heroImg}>
      <div class="container hero__container">
        <div class="hero__content">
          <h4 class="hero__subtitle">
            {heroDescr}
            <span class="hero__line"></span>
          </h4>
          <h1 class="hero__title">{heroTitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
