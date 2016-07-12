import mergeable from 'redux-merge-reducers';

import { consts, } from './actions';



function signOutReducer(state = {}, action) {
  switch(action.type) {
    case consts.signOutSuccess:
      return state;

    case consts.signOutFailed:
      return state;

    default:
      return state;
  }
}



export default mergeable(signOutReducer);