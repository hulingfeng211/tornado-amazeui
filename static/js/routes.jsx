import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './containers/App'; 

import Home from './components/Home';
import SubBox from './components/SubBox';
import Detail from './components/Detail';

 
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path=":component" component={SubBox} />
    <Route path="products/article" component={Detail} />
  </Route>
)

export default routes