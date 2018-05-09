// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';



// Here are our custom reducers.
import appReducer from './appReducer';
import {guestReducer} from './guestReducer';
import {companyReducer} from './companyReducer';
import { templateReducer } from './templateReducer';

export default combineReducers({
  appState:appReducer,
  guestState:guestReducer,
  companyState: companyReducer,
  templateState: templateReducer,
  form: formReducer,
  routing
  // More reducers if there are
  // can go here
})
