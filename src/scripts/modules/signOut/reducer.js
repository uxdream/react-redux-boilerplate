import { consts, } from './actions';



export default function(state = { signOut: true, }, action) {
  switch(action.type) {
    case consts.signOutSuccess:
      return state;

    case consts.signOutFailed:
      return state;

    default:
      return state;
  }
}