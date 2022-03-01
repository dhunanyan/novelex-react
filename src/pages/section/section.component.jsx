import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Route, Routes, useNavigate } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import { Card } from "../../components/card/card.component";
import LargeCard from "../../components/large-card/large-card.component";
import CardAdd from "../../components/add-card/add-card.component";

import { selectSection } from "../../redux/sections/sections.selectors";
import { CardsContainer, CardsWrapper, AddButton } from "./section.styles";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { selectCardsObj } from "../../redux/cards/cards.selectors";

import { HiPlusSm as Plus } from "react-icons/hi";

const SectionPage = ({ currentUser }) => {
  const { sectionId } = useParams();
  const section = useSelector(selectSection(sectionId));
  const dispatch = useDispatch();
  const cardsObj = useSelector(selectCardsObj(sectionId));
  const { hero, largeCards, colors } = section;
  const [isShownCardAdd, setIsShownCardAdd] = useState(false);

  useEffect(() => {
    dispatch(fetchCardsStart());
  }, [dispatch]);
  const navigate = useNavigate();

  const handleCloseButton = () => {
    return setIsShownCardAdd(false);
  };

  return (
    <div>
      <Hero hero={hero} />

      <CardsWrapper>
        <CardsContainer cardNames={Object.keys(Object.fromEntries(cardsObj))}>
          {cardsObj.map((card) => {
            if (card[1]) {
              if (card[1].page === sectionId) {
                return <Card key={card[1].name} card={card[1]} {...colors} />;
              } else {
                return null;
              }
            } else {
              return null;
            }
          })}
        </CardsContainer>

        {currentUser ? (
          <AddButton
            {...colors}
            onClick={() => {
              setIsShownCardAdd(true);
            }}
          >
            <p>Add Card</p>
            <span>
              <Plus />
            </span>
          </AddButton>
        ) : null}
      </CardsWrapper>

      {isShownCardAdd ? (
        <CardAdd
          sectionId={sectionId}
          {...colors}
          handleCloseButton={handleCloseButton}
        />
      ) : null}

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
