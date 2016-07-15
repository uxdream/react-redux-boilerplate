import { assign, } from 'lodash/fp';

import { consts, } from './actions';

export default function intlReducer(state = {
  locales: {},
  messages: {},
}, action) {
  switch(action.type) {
    case consts.changeLanguageSuccess:
      return assign(
        state,
        {
          activeLanguage: action.language,
          locales: assign(
            state.locales,
            {
              [action.language]: action.locales,
            },
          ),
          messages: assign(
            state.messages,
            {
              [action.language]: action.messages,
            },
          ),
        }
      );

    case consts.changeLanguageFailed:
      return state;

    default:
      return state;
  }
}