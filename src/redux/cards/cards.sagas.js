import { connect, useSelector } from "react-redux";
import { useParams } from "react-router";
import { compose } from "redux";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCardsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchCardsSuccess, fetchCardsFailure } from "./cards.actions";

import CardsActionTypes from "./cards.types";

export function* fetchCardsAsync() {
  try {
    const cardsRef = firestore.collection("cards");

    const cardsSnapshot = yield cardsRef.get();

    const cardsMap = yield call(convertCardsSnapshotToMap, cardsSnapshot);
    yield put(fetchCardsSuccess(cardsMap));
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
