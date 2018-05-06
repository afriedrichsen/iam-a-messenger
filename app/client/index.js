import React from 'react';
import { render } from 'react-dom';
//import {BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

//import App from './containers/App';

//Loading some css specifically for reactstrap.
import 'bootstrap/dist/css/bootstrap.css';

render(
    <App />,
    document.getElementById('root')
);