import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute path='/' component={Home}/>
      <Route path='/detail/:detailId' component={Detail}/>
    </Route>
  </Router>
);

export default routes;