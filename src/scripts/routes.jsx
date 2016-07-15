import React from 'react';
import { IndexRedirect, Route, } from 'react-router';

import Dashboard from 'modules/dashboard';
import SignIn    from 'modules/signIn';
import SignOut   from 'modules/signOut';

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
      component={ SignOut }
      path={ paths.signOut }
    />

    <Route
      component={ Dashboard }
      path={ paths.dashboard }
    />
  </Route>
);