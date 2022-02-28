import { takeLatest, call, put, all } from "redux-saga/effects";

import { addCardSuccess, addCardFailure } from "./card-add.actions";

import AddCardActionTypes from "./card-add.types";

export function* addCardAsync() {
  try {
  } catch {}
}

export function* onAddCardStart() {
  yield takeLatest(AddCardActionTypes.CARD_ADD_START, addCardAsync);
}

export function* addCardSagas() {
  yield all([call(onAddCardStart)]);
}
