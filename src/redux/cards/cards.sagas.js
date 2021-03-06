import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCardsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchCardsSuccess, fetchCardsFailure } from "./cards.actions";

import CardsActionTypes from "./cards.types";
import { filterCards } from "./cards.utils";

export function* fetchCardsAsync({ payload: sectionId }) {
  try {
    const cardsRef = firestore.collection("cards");

    const cardsSnapshot = yield cardsRef.get();

    const cardsMap = yield call(convertCardsSnapshotToMap, cardsSnapshot);

    const filteredCards = yield call(filterCards, cardsMap, sectionId);

    yield put(fetchCardsSuccess(filteredCards));
  } catch (error) {
    yield put(fetchCardsFailure(error));
  }
}

export function* onFetchCardsStart() {
  yield takeLatest(CardsActionTypes.FETCH_CARDS_START, fetchCardsAsync);
}

export function* cardsSagas() {
  yield all([call(onFetchCardsStart)]);
}
