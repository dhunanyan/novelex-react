import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import { takeLatest, call, put, all } from "redux-saga/effects";
import { handleImageUpload } from "../../ResultAdd";

import {
  addCardSuccess,
  addCardFailure,
  addImageSuccess,
  addImageFailure,
} from "./card-add.actions";

import AddCardActionTypes from "./card-add.types";

export function* addImageAsync({ payload: { sectionId, image } }) {
  try {
    let { progress, url } = yield call(handleImageUpload, sectionId, image);
    if (progress === 100) {
      yield put(addImageSuccess(url));
    }
  } catch (error) {
    yield put(addImageFailure(error));
  }
}

export function* addCardAsync() {
  try {
  } catch {}
}

export function* onImageCardStart() {
  yield takeLatest(AddCardActionTypes.IMAGE_ADD_START, addImageAsync);
}

export function* onAddCardStart() {
  yield takeLatest(AddCardActionTypes.IMAGE_ADD_SUCCESS, addCardAsync);
}

export function* addCardSagas() {
  yield all([call(onAddCardStart)]);
}
