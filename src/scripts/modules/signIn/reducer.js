import mergeable from 'redux-merge-reducers';
import { assign, } from 'lodash/fp';

import { consts, } from './actions';



function signInReducer(state = {}, action) {
  switch(action.type) {
    case consts.signInSuccess:
      return assign(
        {},
        {
          token: action.token,
        },
        state
      );

    case consts.signInFailed:
      return state;

    default:
      return state;
  }
}



export default mergeable(signInReducer);