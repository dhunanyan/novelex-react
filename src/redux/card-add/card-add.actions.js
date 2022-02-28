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

export const addImageStart = ({ sectionId, image, additionalData }) => ({
  type: AddCardActionTypes.IMAGE_ADD_START,
  payload: { sectionId, image, additionalData },
});

export const addImageSuccess = ({ url }) => ({
  type: AddCardActionTypes.IMAGE_ADD_SUCCESS,
  payload: { url },
});

export const addImageFailure = (errorMessage) => ({
  type: AddCardActionTypes.IMAGE_ADD_FAILURE,
  payload: errorMessage,
});
