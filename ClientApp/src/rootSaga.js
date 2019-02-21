import {all, fork} from 'redux-saga/effects';
import usersSaga from './components/Theme/ListView/sagas';

export default function* root() {
  yield all([
    fork(usersSaga)
  ]);
}