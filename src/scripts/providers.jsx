import React from 'react';
import { IntlProvider, } from 'react-intl';
import { connect, Provider as Store, } from 'react-redux';
import { Router, } from 'react-router';

import { changeLanguageRequest, } from 'modules/intl/actions';

import Auth from 'providers/auth';
import Intl from 'providers/intl';

import history from './history';
import routes  from './routes';
import store   from './store';



function connectReactIntlToStore(state) {
  const {
    activeLanguage,
    messages,
  } = state.intl;

  return {
    key:      activeLanguage || 'en',
    locale:   activeLanguage || 'en',
    messages: messages[activeLanguage] || {},
  };
}

const ReactIntl = connect(connectReactIntlToStore)(IntlProvider);



store.dispatch(changeLanguageRequest('en'));



export default (
  <Store store={ store }>
    <ReactIntl>
      <Intl>
        <Auth>
          <Router
            history={ history }
            routes={ routes }
          />
        </Auth>
      </Intl>
    </ReactIntl>
  </Store>
);