import { takeLatest, } from 'redux-saga';
import { put, } from 'redux-saga/effects';

import { consts, } from './actions';



function* signIn() {
  try {
    yield put({
      token: '0000-1111-0000',
      type: consts.signInSuccess,
    });
  }

  catch(error) {
    yield put({
      type: consts.signInFailed,
    });
  }
}



export function* signInRequest() {
  while(true) { // eslint-disable-line no-constant-condition
    yield takeLatest(consts.signInRequest, signIn);
  }
}