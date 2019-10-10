import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

/**
 * Defines project routes.
 */
export default (
  <Route path="/kr8swordz" component={App} >
    <IndexRoute component={HomePage} />
  </Route>
);
