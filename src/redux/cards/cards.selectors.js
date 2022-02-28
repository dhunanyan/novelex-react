import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectCardsCollection = (state) => state.cardsCollection;

export const selectCards = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.cards
);

export const selectCardsObj = memoize((sectionId) =>
  createSelector([selectCards], (cards) =>
    cards
      ? Object.entries(cards).filter((entrie, i) => {
          return entrie[1].page === sectionId ? true : false;
        })
      : []
  )
);

export const selectCardsForPreview = memoize((sectionId) =>
  createSelector([selectCards], (cards) =>
    cards
      ? Object.values(cards).filter((card) =>
          card.page === sectionId ? card : false
        )
      : []
  )
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
