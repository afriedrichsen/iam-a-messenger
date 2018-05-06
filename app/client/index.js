import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';


// CSS imports (needed for Reactstrap).
import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';

//Here comes our Redux.
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//Here are our routes for React Router.
import routes from './routes';

// Let there be Redux!
const store = configureStore()

ReactDOM.render(<Provider store={store}><Router history={browserHistory} routes={routes} /></Provider>,document.getElementById('root'));
registerServiceWorker();