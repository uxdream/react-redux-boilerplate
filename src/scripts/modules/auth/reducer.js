import mergeable from 'redux-merge-reducers';
import { assign } from 'lodash/fp';

import { consts } from './actions';

function signInReducer(state = {
  token: localStorage.getItem('token'),
}, action) {
  switch(action.type) {
    case consts.signInSuccess:
      return assign(
        state,
        {
          token: action.token,
        }
      );

    case consts.signInFailed:
      return state;

    case consts.signOutSuccess:
      return assign(
        state,
        {
          token: undefined,
        }
      );

    case consts.signOutFailed:
      return state;

    default:
      return state;
  }
}

export default mergeable(signInReducer);