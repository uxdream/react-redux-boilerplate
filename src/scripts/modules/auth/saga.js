import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { consts } from './actions';

function* signIn() {
  try {
    const token = '1111-0000-1111';

    localStorage.setItem('token', token);

    yield put({
      token,
      type: consts.signInSuccess,
    });
  }

  catch(error) {
    console.error(error);

    yield put({
      type: consts.signInFailed,
    });
  }
}

function* signOut() {
  try {
    localStorage.removeItem('token');

    yield put({
      type: consts.signOutSuccess,
    });
  }

  catch(error) {
    console.error(error);

    yield put({
      type: consts.signOutFailed,
    });
  }
}

export function* signInRequest() {
  while(true) { // eslint-disable-line no-constant-condition
    yield takeLatest(consts.signInRequest, signIn);
  }
}

export function* signOutRequest() {
  while(true) { // eslint-disable-line no-constant-condition
    yield takeLatest(consts.signOutRequest, signOut);
  }
}