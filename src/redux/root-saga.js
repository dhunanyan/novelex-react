import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { pagesSagas } from "./sections/sections.sagas";
import { cardsSagas } from "./cards/cards.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(pagesSagas), call(cardsSagas)]);
}
