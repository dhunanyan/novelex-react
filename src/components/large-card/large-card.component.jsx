import React from "react";
import {
  LargeCardContainer,
  LargeCardImg,
  LargeCardTitle,
  LargeCardCotnent,
  LargeCardDescr,
  LargeCardButton,
  LargeCardContentContainer,
  LargeCardWrapper,
} from "./large-card.styles";

import strategy from "../../assets/about/strategy.jpg";
import people from "../../assets/life/people.jpg";

const getLargeCardImg = (cardName) =>
  cardName === "strategy" ? strategy : people;

const LargeCard = ({ name, descr, title, fill, opacity }) => {
  return (
    <LargeCardWrapper>
      <LargeCardContainer>
        <LargeCardImg>
          <img src={getLargeCardImg(name)} alt="Card" />
        </LargeCardImg>

        <LargeCardContentContainer>
          <LargeCardCotnent>
            <LargeCardTitle opacity={opacity}>{title}</LargeCardTitle>
            <LargeCardDescr>{descr}</LargeCardDescr>
            <LargeCardButton fill={fill} to="/">
              Read more
            </LargeCardButton>
          </LargeCardCotnent>
        </LargeCardContentContainer>
      </LargeCardContainer>
    </LargeCardWrapper>
  );
};

export default LargeCard;
