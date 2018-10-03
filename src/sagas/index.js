import { helloSaga } from "./counter";
import { all } from "redux-saga/effects";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga() /*, another saga here*/]);
}
