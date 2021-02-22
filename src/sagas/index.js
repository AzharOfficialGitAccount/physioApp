import {all} from 'redux-saga/effects';
import {loginWatcherSaga} from './loginSaga';

export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
  ]);
}
