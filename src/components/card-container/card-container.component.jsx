import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { selectCards, selectCardsObj } from "../../redux/cards/cards.selectors";
// import {
//   AddButton,
//   CardsContainer,
//   CardsGridInner,
//   CardsWrapper,
// } from "./card-container.styles";

import { Card } from "../../components/card/card.component";

import { MdPostAdd as Plus } from "react-icons/md";
import CardAdd from "../add-card/add-card.component";
import { CardsContainer, CardsWrapper } from "./card-container.styles";

const CardsSection = ({ currentUser, bodyLock, colors, sectionId }) => {
  const dispatch = useDispatch();
  const [isShownCardAdd, setIsShownCardAdd] = useState(false);
  const cards = useSelector(selectCards);
  const cardsObj = useSelector(selectCardsObj(sectionId));
  const cardsObjSorted = cardsObj.sort((k1, k2) => {
    const kk1 = `${k1[1].gridRow}${k1[1].gridRow}${k1[1].gridCol}`;
    const kk2 = `${k2[1].gridRow}${k2[1].gridRow}${k2[1].gridCol}`;
    return parseInt(kk1) - parseInt(kk2);
  });

  const chunk = (array) => {
    const temporary = [],
      chunk = 3;
    let order = "";
    for (let i = 0, j = 111; i < array.length; i++) {
      order = parseInt(
        `${array[i][1].gridRow}${array[i][1].gridRow}${array[i][1].gridCol}`
      );
      console.log(j);
      if (j >= order) {
        temporary.push(array.slice(i, i + chunk));
        j++;
      } else {
        j += 110;
      }
    }

    console.log(cardsObj);
  };

  chunk(cardsObjSorted);

  useEffect(() => {
    dispatch(fetchCardsStart(sectionId));
  }, [dispatch, sectionId]);

  const handleCloseButton = () => {
    return setIsShownCardAdd(false);
  };

  return (
    <CardsWrapper>
      <CardsContainer></CardsContainer>
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

//         {isShownCardAdd ? (
//           <CardAdd
//             cardsObjSorted={cardsObjSorted}
//             sectionId={sectionId}
//             {...colors}
//             handleCloseButton={handleCloseButton}
//           />
//         ) : null}
//       </CardsContainer>
//     </CardsWrapper>
