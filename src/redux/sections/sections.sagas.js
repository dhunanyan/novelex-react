import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertSectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchSectionsSuccess, fetchSectionsFailure } from "./sections.actions";

import SectionsActionTypes from "./sections.types";

export function* fetchSectionsAsync() {
  try {
    const sectionRef = firestore.collection("pages");
    const sectionSnapshot = yield sectionRef.get();

    const sectionsMap = yield call(
      convertSectionsSnapshotToMap,
      sectionSnapshot
    );
    yield put(fetchSectionsSuccess(sectionsMap));
  } catch (error) {
    yield put(fetchSectionsFailure(error));
  }
}

export function* onFetchSectionsStart() {
  yield takeLatest(SectionsActionTypes.FETCH_PAGES_START, fetchSectionsAsync);
}

export function* pagesSagas() {
  yield all([call(onFetchSectionsStart)]);
}
