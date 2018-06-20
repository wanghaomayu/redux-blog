// *非常关键的路由，整个程序应用的"骨架"，开发之前可以先设计好大致的路由架构，那么在组件间跳转时候就按着骨头走，无论用push或replace，那只是方法不同
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame'

const routes =(history) => (
  <Router history={history}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Home}/>
      <Route path='/detail/:id' component={Detail}/>
    </Route>
  </Router>
);

export default routes;