import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/GithubExplorer" exact component={Dashboard} />
    <Route
      path="/GithubExplorer/repositories/:repository+"
      component={Repository}
    />
  </Switch>
);

export default Routes;
