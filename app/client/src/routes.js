// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Guests from './containers/Guests';
import GuestsUpload from './containers/GuestsUpload';
import Home from './containers/Home';
import Guest from './containers/Guest';
import Companies from './containers/Companies';
import Company from './containers/Company';
import Templates from './containers/Templates';
import Template from './containers/Template';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Home} />
     <Route path="/manage/guests" component={Guests}/>
      <Route path="/manage/guests/upload" component={GuestsUpload}/>
     <Route path="/manage/guests/:id" component={Guest} />
      <Route path="/manage/companies" component={Companies}/>
      <Route path="/manage/companies/:id" component={Company} />
      <Route path="/manage/templates" component={Templates}/>
      <Route path="/manage/templates/:id" component={Template}/>
  </Route>
)
