import SectionsActionTypes from "./sections.types";

export const fetchSectionsStart = () => ({
  type: SectionsActionTypes.FETCH_PAGES_START,
});

export const fetchSectionsSuccess = (sectionsMap) => ({
  type: SectionsActionTypes.FETCH_PAGES_SUCCESS,
  payload: sectionsMap,
});

export const fetchSectionsFailure = (errorMessage) => ({
  type: SectionsActionTypes.FETCH_PAGES_FAILURE,
  payload: errorMessage,
});
