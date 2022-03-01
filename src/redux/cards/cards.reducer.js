import CardsActionTypes from "./cards.types";
import { addCard, removeCard } from "./cards.utils";

const INITIAL_STATE = {
  cards: null,
  isFetching: false,
  errorMessageFetch: undefined,
  errorMessageDelete: undefined,
  itemToDeleteName: "",
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsActionTypes.FETCH_CARDS_START:
      return {
        ...state,
        isFetching: true,
      };
    case CardsActionTypes.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cards: action.payload,
      };
    case CardsActionTypes.FETCH_CARDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessageFetch: action.payload,
      };
    case CardsActionTypes.DELETE_CARD:
      return {
        ...state,
        cards: removeCard(state.cards, action.payload),
      };
    case CardsActionTypes.ADD_CARD:
      return {
        ...state,
        cards: addCard(state.cards, action.payload),
      };
    default:
      return state;
  }
};

export default cardsReducer;
