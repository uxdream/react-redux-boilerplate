import React from 'react';
import { Route, } from 'react-router';

import SignIn  from 'modules/signIn';
import SignOut from 'modules/signOut';
import Stub    from 'modules/stub';

import paths from 'consts/paths';



export default (
  <Route path="/">
    <Route
      component={ SignIn }
      path={ paths.signIn }
    />

    <Route
      component={ SignOut }
      path={ paths.signOut }
    />

    <Route
      component={ Stub }
      path={ paths.dashboard }
    />
  </Route>
);