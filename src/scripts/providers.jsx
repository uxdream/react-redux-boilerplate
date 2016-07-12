import React from 'react';
import { Provider as Store, } from 'react-redux';
import { Router, browserHistory as history, } from 'react-router';

import routes from './routes';
import store  from './store';



export default (
  <Store store={ store }>
    <Router
      history={ history }
      routes={ routes }
    />
  </Store>
);