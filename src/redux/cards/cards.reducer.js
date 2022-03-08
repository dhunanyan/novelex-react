import CardsActionTypes from "./cards.types";
import { addCard, filterCards, removeCard } from "./cards.utils";

const INITIAL_STATE = {
  cards: null,
  isFetching: false,
  errorMessageFetch: undefined,
  errorMessageDelete: undefined,
  itemToDeleteName: "",
};

const {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  DELETE_CARD,
  ADD_CARD,
} = CardsActionTypes;

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CARDS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cards: action.payload,
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessageFetch: action.payload,
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: removeCard(state.cards, action.payload),
      };
    case ADD_CARD:
      return {
        ...state,
        cards: addCard(state.cards, action.payload),
      };
    default:
      return state;
  }
};

export default cardsReducer;
