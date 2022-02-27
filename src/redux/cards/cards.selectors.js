import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectCardsCollection = (state) => state.cardsCollection;

export const selectCards = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.cards
);

export const selectCardsForPreview = createSelector([selectCards], (cards) =>
  cards ? Object.keys(cards).map((key) => cards[key]) : []
);

export const selectCard = memoize((cardUrlParam) =>
  createSelector([selectCards], (cards) => (cards ? cards[cardUrlParam] : null))
);

export const selectIsCardsFetching = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.isFetching
);

export const selectIsCardsLoaded = createSelector(
  [selectCardsCollection],
  (cardsCollection) => !!cardsCollection.cards
);

export const selectCardsSectionId = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.sectionId
);
