import { signInRequest, signOutRequest, } from './auth/saga';
import { changeLanguageRequest, }         from './intl/saga';

export default function* sagas() {
  yield [
    changeLanguageRequest(),
    signInRequest(),
    signOutRequest(),
  ];
}