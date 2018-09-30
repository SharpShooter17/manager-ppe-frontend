// https://reacttraining.com/react-router/web/api/Route

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {Header} from './Header'
import {Footer} from './Footer'
import {Home} from './Home'
import CreateNewClientForm from './Client/CreateClientForm'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientFinder from './Client/Finder'
import {Grid, Row, Col} from 'react-bootstrap'
import Client from "./Client/Client";
import CreatePpe from "./Ppe/Create";

export class Root extends Component {
    render() {
        return (
            <Grid className="container App Site">
                <Row>
                    <Header/>
                </Row>

                <Row className="Site-content">
                    <Col>
                        <main>
                            <Switch>
                                <Route exact path={'/'} component={Home}/>

                                <Route path={'/client/create'} component={CreateNewClientForm}/>
                                <Route path={'/client/find'} component={ClientFinder}/>
                                <Route path={'/client/:code'} component={Client}/>

                                <Route path={'/ppe/create'} component={CreatePpe}/>
                            </Switch>
                        </main>
                    </Col>
                </Row>

                <Row>
                    <Footer/>
                </Row>
                <ToastContainer autoClose={8000}/>
            </Grid>
        );
    }
}
