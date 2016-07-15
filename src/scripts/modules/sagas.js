import { changeLanguageRequest, } from './intl/saga';
import { signInRequest, }         from './signIn/saga';
import { signOutRequest, }        from './signOut/saga';

export default function* sagas() {
  yield [
    changeLanguageRequest(),
    signInRequest(),
    signOutRequest(),
  ];
}