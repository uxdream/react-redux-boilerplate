import { find } from 'lodash/fp';
import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { addLocaleData } from 'react-intl';

import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

import store from '../../store';

import { consts } from './actions';

const localesData = {
  de,
  en,
  pl,
};

const messagesData = {
  de: {
    SIGN_IN: 'Loggen',
    SIGN_OUT: 'Ausloggen',
  },
  en: {
    SIGN_IN: 'Sign in',
    SIGN_OUT: 'Sign out',
  },
  pl: {
    SIGN_IN: 'Zaloguj się',
    SIGN_OUT: 'Wyloguj się',
  },
};

function* changeLanguage(action) {
  const {
    language,
  } = action;

  try {
    localStorage.setItem('language', language);

    document.querySelector('html').setAttribute('lang', language);

    const languageIsLoaded = find(language, Object.keys(store.getState().intl.locales));

    if(!languageIsLoaded) {
      const locales  = localesData[language];
      const messages = messagesData[language];

      addLocaleData(locales);

      yield put({
        language,
        locales,
        messages,
        type: consts.changeLanguageSuccess,
      });
    }

    else {
      yield put({
        language,
        type: consts.changeLanguageSuccess,
      });
    }
  }

  catch(error) {
    console.error(error);

    yield put({
      type: consts.changeLanguageFailed,
    });
  }
}

export function* changeLanguageRequest() {
  while(true) { // eslint-disable-line no-constant-condition
    yield takeLatest(consts.changeLanguageRequest, changeLanguage);
  }
}