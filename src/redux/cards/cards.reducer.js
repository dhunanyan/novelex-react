import CardsActionTypes from "./cards.types";

const INITIAL_STATE = {
  cards: null,
  isFetching: false,
  errorMessage: undefined,
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
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
