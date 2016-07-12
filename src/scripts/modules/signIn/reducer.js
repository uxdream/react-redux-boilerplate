import { consts, } from './actions';



export default function(state = {}, action) {
  switch(action.type) {
    case consts.signInSuccess:
      return state;

    case consts.signInFailed:
      return state;

    default:
      return state;
  }
}