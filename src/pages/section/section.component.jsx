import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import { Card } from "../../components/card/card.component";
import LargeCard from "../../components/large-card/large-card.component";

import { selectSection } from "../../redux/sections/sections.selectors";
import { CardsContainer, CardsWrapper } from "./section.styles";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { selectCardsForPreview } from "../../redux/cards/cards.selectors";

const SectionPage = () => {
  const { sectionId } = useParams();
  const section = useSelector(selectSection(sectionId));
  const dispatch = useDispatch();
  const cards = useSelector(selectCardsForPreview);

  console.log(cards);

  const cardNames = [];
  const { hero, largeCards, colors } = section;

  useEffect(() => {
    dispatch(fetchCardsStart());
  }, [dispatch]);

  return (
    <div>
      <Hero hero={hero} />

      {cards ? (
        <CardsWrapper>
          <CardsContainer names={cardNames}>
            {cards.map((card, i) => {
              if (card.page === sectionId) {
                console.log(cardNames);
                cardNames[i] = card.name;
                return <Card key={card.name} {...card} {...colors} />;
              } else {
                return null;
              }
            })}
          </CardsContainer>
        </CardsWrapper>
      ) : null}

      {largeCards ? (
        <CardsWrapper>
          <LargeCard {...largeCards} {...colors} />
        </CardsWrapper>
      ) : null}
    </div>
  );
};

export default SectionPage;
