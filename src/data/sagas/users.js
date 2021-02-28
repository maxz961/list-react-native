import {call, put, takeLatest} from 'redux-saga/effects';

import {getUsers} from '../../api';

import {successFetchUsers, fetchUsers, errorFetchUsers} from '../actions/users';

function* fetchUsersWorker() {
  try {
    const {data} = yield call(getUsers);
    yield put(successFetchUsers(data));
  } catch (error) {
    yield put(errorFetchUsers());
    console.log(error);
  }
}

export function* watchUsers() {
  yield takeLatest(fetchUsers, fetchUsersWorker);
}
