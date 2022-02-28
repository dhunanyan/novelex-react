import AddCardActionTypes from "./card-add.types";

export const addCardsStart = () => ({
  type: AddCardActionTypes.CARD_ADD_START,
});

export const addCardsSuccess = (imageUploadProgress) => ({
  type: AddCardActionTypes.CARD_ADD_SUCCESS,
  payload: imageUploadProgress,
});

export const addCardsFailure = (errorMessage) => ({
  type: AddCardActionTypes.CARD_ADD_FAILURE,
  payload: errorMessage,
});

export const addImageStart = () => ({
  type: AddCardActionTypes.IMAGE_ADD_START,
});

export const addImageSuccess = (imageUploadProgress) => ({
  type: AddCardActionTypes.IMAGE_ADD_SUCCESS,
  payload: imageUploadProgress,
});

export const addImageFailure = (errorMessage) => ({
  type: AddCardActionTypes.IMAGE_ADD_FAILURE,
  payload: errorMessage,
});
