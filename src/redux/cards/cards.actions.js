import CardsActionTypes from "./cards.types";

export const fetchCardsStart = () => ({
  type: CardsActionTypes.FETCH_CARDS_START,
});

export const fetchCardsSuccess = (cardsMap) => ({
  type: CardsActionTypes.FETCH_CARDS_SUCCESS,
  payload: cardsMap,
});

export const fetchCardsFailure = (errorMessage) => ({
  type: CardsActionTypes.FETCH_CARDS_FAILURE,
  payload: errorMessage,
});
