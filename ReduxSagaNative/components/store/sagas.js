/* eslint-disable prettier/prettier */
import {put, takeLatest} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';

function* fetchUserList() {
  // console.warn('Saga: Fetching user list');
  const url = 'https://reqres.in/api/users';
  let res = yield fetch(url);
  let data = yield res.json();
  data = data.data;
  // console.warn('data in saga', data);
  yield put({type: SET_USER_DATA, data});
}

function* SagaData() {
  yield takeLatest(USER_LIST, fetchUserList);
}

export default SagaData;
