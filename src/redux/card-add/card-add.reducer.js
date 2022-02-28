import AddCardActionTypes from "./card-add.types";

const INITIAL_STATE = {
  addedCard: null,
  imageUploadProgress: 0,
  isImageUploading: false,
  errorPostMessage: null,
  errorImageMessage: null,
};

const addCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case AddCardActionTypes.CARD_ADD_START:
    case AddCardActionTypes.IMAGE_ADD_START:
      return {
        ...state,
        isImageUploading: true,
      };
    case AddCardActionTypes.CARD_ADD_SUCCESS:
      return {
        ...state,
        errorPostMessage: null,
        addedCard: action.payload,
      };
    case AddCardActionTypes.IMAGE_ADD_SUCCESS:
      return {
        ...state,
        imageUploadProgress: action.payload,
        isImageUploading: false,
      };
    case AddCardActionTypes.IMAGE_ADD_FAILURE:
      return {
        ...state,
        imageUploadProgress: 0,
        errorImageMessage: action.payload,
      };
    case AddCardActionTypes.CARD_ADD_FAILURE:
      return {
        ...state,
        addedCard: null,
        errorPostMessage: action.payload,
        isImageUploading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default addCardReducer;
