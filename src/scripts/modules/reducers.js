import { combineReducers } from 'redux';

import auth from './auth/reducer';
import intl from './intl/reducer';

export default combineReducers({
  auth,
  intl,
});