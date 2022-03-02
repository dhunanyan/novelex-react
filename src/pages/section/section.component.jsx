import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import { Card } from "../../components/card/card.component";
import LargeCard from "../../components/large-card/large-card.component";
import CardAdd from "../../components/add-card/add-card.component";

import { selectSection } from "../../redux/sections/sections.selectors";
import { CardsContainer, CardsWrapper, AddButton } from "./section.styles";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { selectCardsObj } from "../../redux/cards/cards.selectors";

import { MdPostAdd as Plus } from "react-icons/md";
import { CardContainer } from "../../components/card/card.styles";
import CardsSection from "../../components/card-container/card-container.component";

const SectionPage = ({ currentUser, bodyLock }) => {
  const { sectionId } = useParams();
  const section = useSelector(selectSection(sectionId));
  const dispatch = useDispatch();
  const { hero, largeCards, colors } = section;

  useEffect(() => {
    dispatch(fetchCardsStart());
  }, [dispatch]);
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

      <CardsWrapper>
        <LargeCard {...largeCards} {...colors} />
        {currentUser ? (
          <button onClick={() => navigate(`/${sectionId}/addCard`)} />
        ) : null}
      </CardsWrapper>
    </div>
  );
};

export default SectionPage;
