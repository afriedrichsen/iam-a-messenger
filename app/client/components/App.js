import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

//import List from './List'
import Home from './Home'
import Manage from './Manage'

export default function App(props) {

//    const { pokemon } = props;

    return (
        <div>
            Your SSR React Router Node App initialised with data!
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/manage" exact component={Manage}/>
            </Switch>
        </div>
    )
};