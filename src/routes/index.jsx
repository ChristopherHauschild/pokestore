import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AquaStore } from 'pages/AquaStore';

const Routes = () => (
  <Switch>
    <Route path="/aqua-store" component={AquaStore} />
    <Redirect to="/aqua-store" component={AquaStore} />
  </Switch>
);

export default Routes;
