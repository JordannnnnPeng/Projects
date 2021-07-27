import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Planner from '../planner';
import List from '../planner/list';
import Result from '../planner/result';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();

const Routes = props => {
  <HashRouter history={hashHistory}></HashRouter>
  return (
    <section className="">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/list" component={List} />
        <PrivateRoute exact path="/planner" component={Planner} />
        <PrivateRoute exact path="/result/:id/:name" component={Result} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
