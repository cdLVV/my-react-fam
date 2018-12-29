import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import routes from 'routesConfig/basicRoutes'
import lazyLoad from './lazyLoad'

const getRouter = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page1">第一页</Link></li>
        <li><Link to="/page2">第二页</Link></li>
      </ul>
      <Switch>
        {
          routes.map(route => <Route key={route.path} exact={route.exact} path={route.path} component={lazyLoad(route.component)} />)
        }
      </Switch>
    </div>
  </BrowserRouter>
);

export default getRouter;