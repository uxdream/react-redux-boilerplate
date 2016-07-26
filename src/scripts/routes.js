import React from 'react';
import { IndexRedirect, Route, } from 'react-router';

import Dashboard from 'modules/dashboard';
import SignIn    from 'modules/auth';

import paths from 'consts/paths';

export default (
  <Route path="/">
    <IndexRedirect
      to={ paths.signIn }
    />

    <Route
      component={ SignIn }
      path={ paths.signIn }
    />

    <Route
      component={ Dashboard }
      path={ paths.dashboard }
    />
  </Route>
);