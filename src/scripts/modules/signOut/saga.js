import { takeLatest, } from 'redux-saga';
import { put, } from 'redux-saga/effects';

import { consts, } from './actions';

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

export function* signOutRequest() {
  while(true) { // eslint-disable-line no-constant-condition
    yield takeLatest(consts.signOutRequest, signOut);
  }
}