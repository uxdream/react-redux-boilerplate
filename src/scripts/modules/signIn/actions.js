export const consts = {
  signInRequest: 'SIGN_IN_REQUEST',
  signInSuccess: 'SIGN_IN_SUCCESS',
  signInFailed:  'SIGN_IN_FAILED',
};



export function signInRequest() {
  return {
    type: consts.signInRequest,
  };
}