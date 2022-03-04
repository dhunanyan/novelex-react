import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import {
  selectCardsObj,
  selectChunkedCardsArr,
} from "../../redux/cards/cards.selectors";
// import {
//   AddButton,
//   CardsContainer,
//   CardsGridInner,
//   CardsWrapper,
// } from "./card-container.styles";

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

  useEffect(() => {
    dispatch(fetchCardsStart(sectionId));
  }, [dispatch, sectionId]);

  const handleCloseButton = () => {
    return setIsShownCardAdd(false);
  };

  return (
    <CardsWrapper>
      <CardsContainer>
        {cardsArr.map((row, rowIndex) => (
          <CardsGridInner key={rowIndex}>
            {row.map((card, cardIndex) => {
              console.log(card);
              return card !== "addButton" ? (
                <Card
                  card={card[1]}
                  fill={fill}
                  opacity={opacity}
                  currentUser={currentUser}
                  key={cardIndex}
                />
              ) : null;
            })}
            {(row.length < 3 && currentUser) ||
            (row[0] === "addButton" && currentUser) ? (
              <AddButton
                {...colors}
                key={rowIndex}
                onClick={() => {
                  setIsShownCardAdd(true);
                  bodyLock(true);
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
// <CardsWrapper>
//       <CardsContainer cardNames={Object.keys(Object.fromEntries(cardsObj))}>
//         {cardsObjSorted.map((card, i, arr) => {
//           if (card[1]) {
//             if (card[1].page === sectionId) {
//               return (
//                 <CardsGridInner
//                   index={i}
//                   length={currentUser ? arr.length + 1 : arr.length}
//                   size={card[1].size}
//                   gridRow={card[1].gridRow}
//                   gridCol={card[1].gridCol}
//                   key={i}
//                   currentUser={currentUser}
//                 >
//                   <Card
//                     currentUser={currentUser}
//                     key={card[1].cardId}
//                     index={i}
//                     length={currentUser ? arr.length + 1 : arr.length}
//                     size={card[1].size}
//                     gridRow={card[1].gridRow}
//                     gridCol={card[1].gridCol}
//                     card={card[1]}
//                     {...colors}
//                     margin={
//                       ((card[1].gridCol === 2 && card[1].size === 2) ||
//                         (card[1].gridCol === 1 && card[1].size === 3)) &&
//                       currentUser
//                         ? "30px"
//                         : "0"
//                     }
//                     width={
//                       ((card[1].gridCol === 2 && card[1].size === 2) ||
//                         (card[1].gridCol === 1 && card[1].size === 3)) &&
//                       currentUser
//                         ? card[1].gridCol === 2 && card[1].size === 2
//                           ? "413px"
//                           : card[1].gridCol === 1 && card[1].size === 3
//                           ? "776px"
//                           : "0px"
//                         : "100%"
//                     }
//                   />
//                   {((card[1].gridCol === 2 && card[1].size === 2) ||
//                     (card[1].gridCol === 1 && card[1].size === 3)) &&
//                   currentUser ? (
//                     <AddButton
//                       key={i}
//                       {...colors}
//                       index={i}
//                       length={currentUser ? arr.length + 1 : arr.length}
//                       size={card[1].size}
//                       gridRow={card[1].gridRow}
//                       gridCol={card[1].gridCol}
//                       width={
//                         card[1].gridCol === 2 && card[1].size === 2
//                           ? "calc(30% - 10px)"
//                           : card[1].gridCol === 1 && card[1].size === 3
//                           ? "calc(30% - 15px)"
//                           : "calc(100%)"
//                       }
//                       onClick={() => {
//                         setIsShownCardAdd(true);
//                         bodyLock(true);
//                       }}
//                     >
//                       <Plus />
//                     </AddButton>
//                   ) : null}
//                 </CardsGridInner>
//               );
//             } else {
//               return null;
//             }
//           } else {
//             return null;
//           }
//         })}

// {isShownCardAdd ? (
//   <CardAdd
//     cardsObjSorted={cardsObjSorted}
//     sectionId={sectionId}
//     {...colors}
//     handleCloseButton={handleCloseButton}
//   />
// ) : null}
// </CardsContainer>
//     </CardsWrapper>
