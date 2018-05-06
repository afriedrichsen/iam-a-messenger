import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';

import Guest from './Guest';

class GuestMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            guests: []
        }
    }

    componentDidMount() {

        let initialGuests = [];
        fetch('/messenger/manage/guests', {
            method:'GET',
            mode:'cors'
        }).then((response) =>{
            return response.json();
        }).then((data) => {
            initialGuests = data.results.map((guest) => {
                return guest
            });
            console.log(initialGuests);
            this.setState({
                guests: initialGuests,
            })
        })

    }
    render() {
        return(<Guest state={this.state}/>);
    }
}
export default GuestMenu;