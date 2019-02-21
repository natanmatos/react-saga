import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from '../../../constants/axiosConfig';

function* fetchList(params) {
  try {
    const response = yield call(axios.get, params.route);
    yield put({type: 'FETCH_LIST_SUCCESS', payload: response.data});
  } catch (error) {
    yield put({type: 'FETCH_LIST_FAILURE'});
  }
}

export default function* root() {
  yield all([
    takeLatest('FETCH_LIST', fetchList)
  ])
}