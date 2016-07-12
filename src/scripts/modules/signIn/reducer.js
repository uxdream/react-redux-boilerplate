import mergeable from 'redux-merge-reducers';

import { consts, } from './actions';



function signInReducer(state = {}, action) {
  switch(action.type) {
    case consts.signInSuccess:
      return state;

    case consts.signInFailed:
      return state;

    default:
      return state;
  }
}



export default mergeable(signInReducer);