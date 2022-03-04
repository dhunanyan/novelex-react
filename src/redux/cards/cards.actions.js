import CardsActionTypes from "./cards.types";

export const fetchCardsStart = (sectionId) => ({
  type: CardsActionTypes.FETCH_CARDS_START,
  payload: sectionId,
});

export const fetchCardsSuccess = (cardsMap) => ({
  type: CardsActionTypes.FETCH_CARDS_SUCCESS,
  payload: cardsMap,
});

export const fetchCardsFailure = (errorMessage) => ({
  type: CardsActionTypes.FETCH_CARDS_FAILURE,
  payload: errorMessage,
});

export const deleteCard = (card) => ({
  type: CardsActionTypes.DELETE_CARD,
  payload: card,
});

export const addingCard = (card) => ({
  type: CardsActionTypes.ADD_CARD,
  payload: card,
});
