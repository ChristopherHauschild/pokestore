import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Store } from 'pages/Store';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path={['/store/water', '/store/fire']} component={Store} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
