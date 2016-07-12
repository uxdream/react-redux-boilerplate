export const consts = {
  signOutRequest: 'SIGN_OUT_REQUEST',
  signOutSuccess: 'SIGN_OUT_SUCCESS',
  signOutFailed:  'SIGN_OUT_FAILED',
};



export function signOutRequest() {
  return {
    type: consts.signOutRequest,
  };
}