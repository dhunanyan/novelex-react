import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { selectChunkedCardsArr } from "../../redux/cards/cards.selectors";

import { Card } from "../../components/card/card.component";

import { MdPostAdd as Plus } from "react-icons/md";
import CardAdd from "../add-card/add-card.component";
import {
  AddButton,
  CardsContainer,
  CardsGridInner,
  CardsWrapper,
} from "./card-container.styles";

const CardsSection = ({ currentUser, colors, sectionId, bodyLock }) => {
  const dispatch = useDispatch();
  const [isShownCardAdd, setIsShownCardAdd] = useState(false);
  const cardsArr = useSelector(selectChunkedCardsArr(sectionId));
  const { opacity, fill } = colors;
  const [gridData, setGridData] = useState({ col: 0, row: 0 });

  useEffect(() => {
    dispatch(fetchCardsStart(sectionId));
  }, [dispatch, sectionId]);

  const handleCloseButton = () => {
    return setIsShownCardAdd(false);
  };

  const getGridData = (data) => {
    return setGridData(data);
  };

  return (
    <CardsWrapper>
      <CardsContainer>
        {cardsArr.map((row, rowIndex) => (
          <CardsGridInner key={rowIndex}>
            {row.map((card, cardIndex) =>
              card !== "addButton" ? (
                <Card
                  card={card[1]}
                  fill={fill}
                  opacity={opacity}
                  currentUser={currentUser}
                  key={cardIndex}
                />
              ) : null
            )}
            {(row.length < 3 && currentUser) ||
            (row[0] === "addButton" && currentUser) ? (
              <AddButton
                {...colors}
                key={rowIndex}
                onClick={() => {
                  setIsShownCardAdd(true);
                  bodyLock(true);
                  getGridData(
                    row.length === 1
                      ? { col: 1, row: rowIndex + 1 }
                      : { col: row.length, row: rowIndex + 1 }
                  );
                }}
              >
                <Plus />
              </AddButton>
            ) : null}
          </CardsGridInner>
        ))}
        {isShownCardAdd ? (
          <CardAdd
            cardsArrSorted={cardsArr}
            sectionId={sectionId}
            {...colors}
            handleCloseButton={handleCloseButton}
          />
        ) : null}
      </CardsContainer>
    </CardsWrapper>
  );
};

export default CardsSection;
