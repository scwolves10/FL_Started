import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';
import Swap from './components/dashboard/Swap';
import Pools from './components/dashboard/Pools';
import Loans from './components/dashboard/Loans';
import Borrow from './components/dashboard/Borrow';


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/some/where" component={SomePage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);