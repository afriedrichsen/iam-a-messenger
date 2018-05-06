import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
//import Todos from './containers/Todos';
import ManageUsers from './containers/ManageUsers';

export default (
    <Route path="/" component={App}>
    <IndexRoute component={ManageUsers} />
    </Route>
);