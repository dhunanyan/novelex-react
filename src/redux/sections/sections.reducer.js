import SectionsActionTypes from "./sections.types";

const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMessage: undefined,
};

const sectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SectionsActionTypes.FETCH_PAGES_START:
      return {
        ...state,
        isFetching: true,
      };
    case SectionsActionTypes.FETCH_PAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload,
      };
    case SectionsActionTypes.FETCH_PAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default sectionsReducer;
