import { signInRequest, }  from './signIn/saga';
import { signOutRequest, } from './signOut/saga';



export default function* sagas() {
  yield [
    signInRequest(),
    signOutRequest(),
  ];
}