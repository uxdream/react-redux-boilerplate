import { combineReducers, } from 'redux';

import intl    from './intl/reducer';
import signIn  from './signIn/reducer';
import signOut from './signOut/reducer';



export default combineReducers({
  intl,
  auth: signIn.merge(signOut),
});