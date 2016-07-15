import mergeable from 'redux-merge-reducers';
import { assign, } from 'lodash/fp';

import { consts, } from './actions';



function signOutReducer(state = {}, action) {
  switch(action.type) {
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



export default mergeable(signOutReducer);