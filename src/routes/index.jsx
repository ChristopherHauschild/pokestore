import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Store } from 'pages/Store';

const Routes = () => (
  <Switch>
    <Route path={['/store/water', '/store/fire']} component={Store} />
    <Redirect to="/store/water" />
  </Switch>
);

export default Routes;
