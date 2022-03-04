import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Hero from "../../components/hero/hero.component";

import { selectSection } from "../../redux/sections/sections.selectors";

import CardsSection from "../../components/card-container/card-container.component";

const SectionPage = ({ currentUser, bodyLock }) => {
  const { sectionId } = useParams();
  const section = useSelector(selectSection(sectionId));
  const { hero, largeCards, colors } = section;

  const navigate = useNavigate();

  return (
    <div>
      <Hero hero={hero} />

      <CardsSection
        currentUser={currentUser}
        bodyLock={bodyLock}
        sectionId={sectionId}
        colors={colors}
      />
    </div>
  );
};

export default SectionPage;
