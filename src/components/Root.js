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
import Ppe from './Ppe/Ppe'
import PpeFinder from './Ppe/Finder'
import 'react-datepicker/dist/react-datepicker.css';
import ElectricityMeter from "./ElectricityMeter/ElectricityMeter";

export class Root extends Component {
    render() {
        return (
            <Grid className="container">
                <Row>
                    <Header/>
                </Row>

                <Row>
                    <Col>
                        <main>
                            <Switch>
                                <Route exact path={'/'} component={Home}/>

                                <Route path={'/client/create'} component={CreateNewClientForm}/>
                                <Route path={'/client/find'} component={ClientFinder}/>
                                <Route path={'/client/:code'} component={Client}/>

                                <Route path={'/ppe/find'} component={PpeFinder} />
                                <Route path={'/ppe/:physicalId'} component={Ppe} />

                                <Route path={'/electricityMeter/:number'} component={ElectricityMeter} />
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
