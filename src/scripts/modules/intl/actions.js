export const consts = {
  changeLanguageRequest: 'CHANGE_LANGUAGE_REQUEST',
  changeLanguageSuccess: 'CHANGE_LANGUAGE_SUCCESS',
  changeLanguageFailed:  'CHANGE_LANGUAGE_FAILED',
};



export function changeLanguageRequest(language) {
  return {
    language,
    type: consts.changeLanguageRequest,
  };
}