import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AquaStore } from 'pages/AquaStore';
import { FireStore } from 'pages/FireStore';

const Routes = () => (
  <Switch>
    <Route path="/aqua-store" component={AquaStore} />
    <Route path="/fire-store" component={FireStore} />
    <Redirect to="/aqua-store" component={AquaStore} />
  </Switch>
);

export default Routes;
