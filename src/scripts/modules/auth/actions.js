export const consts = {
  signInRequest: 'SIGN_IN_REQUEST',
  signInSuccess: 'SIGN_IN_SUCCESS',
  signInFailed:  'SIGN_IN_FAILED',

  signOutRequest: 'SIGN_OUT_REQUEST',
  signOutSuccess: 'SIGN_OUT_SUCCESS',
  signOutFailed:  'SIGN_OUT_FAILED',
};

export function signInRequest(email, password) {
  return {
    email,
    password,
    type: consts.signInRequest,
  };
}

export function signOutRequest() {
  return {
    type: consts.signOutRequest,
  };
}