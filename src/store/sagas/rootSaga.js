import { all } from "redux-saga/effects";
import watcherUserSaga from '../sagas/handlers/fetchUsers'

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
