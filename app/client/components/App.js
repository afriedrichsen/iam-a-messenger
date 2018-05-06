import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';



import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import Header from './Header';
import GuestMenu from './GuestMenu';

export default function App(props) {

//    const { pokemon } = props;

    return (<div>
            <Header></Header>
            <Router>
                <Route></Route>
            </Router>
            <Container>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>

                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                    Select User to Notify:
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <GuestMenu></GuestMenu>

                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>

                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>

                        Select User's Hotel:
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <GuestMenu></GuestMenu>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>

                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                    Select Message:
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <GuestMenu></GuestMenu>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>

    )
};