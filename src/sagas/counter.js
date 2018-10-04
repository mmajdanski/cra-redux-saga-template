import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* count(payload) {
  console.log(payload);
  yield delay(1000);
  yield put({ type: "UPDATE_COMPLETE", payload: 1 });
  //Need to have payload sent here...
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCounter() {
  yield takeEvery("UPDATE_COUNTER", count);
}
