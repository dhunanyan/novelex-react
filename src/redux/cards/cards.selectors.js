import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectCardsCollection = (state) => state.cardsCollection;

export const selectCards = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.cards
);

export const selectCardsLength = createSelector([selectCards], (cards) =>
  cards ? Object.keys(cards).map((key) => cards[key]).length : null
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

export const selectChunkedCardsArr = memoize((sectionId) =>
  createSelector([selectCardsObj(sectionId)], (array) => {
    const arrSorted = array.sort((k1, k2) => {
      const kk1 = `${k1[1].gridRow}${k1[1].gridRow}${k1[1].gridCol}`;
      const kk2 = `${k2[1].gridRow}${k2[1].gridRow}${k2[1].gridCol}`;
      return parseInt(kk1) - parseInt(kk2);
    });

    const rows = arrSorted.map((entrie) => entrie[1].gridRow);
    const rowsCount = [];
    rows.forEach((x) => {
      rowsCount[x] = (rowsCount[x] || 0) + 1;
    });
    rowsCount.shift();

    const resultArr = [];
    for (let i = 0, j = 0; i < arrSorted.length; i += rowsCount[j], j++) {
      resultArr.push(arrSorted.slice(i, i + rowsCount[j]));
    }
    resultArr.push(["addButton"]);
    console.log(resultArr);
    return resultArr;
  })
);
