// https://reacttraining.com/react-router/web/api/Route

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import {Header} from './Header'
import {Footer} from './Footer'
import {Home} from './Home'
import CreateNewClient from './Client/CreateClient'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Root extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Header/>
                </div>

                <div className="row">
                    <div className="col">
                        <main>
                            <Switch>
                                <Route exact path={'/'} component={Home}/>
                                <Route exact path={'/client/createNewClient'} component={CreateNewClient}/>
                            </Switch>
                        </main>
                    </div>
                </div>

                <div className="row">
                    <Footer/>
                </div>
                <ToastContainer autoClose={8000} />
            </div>
        );
    }
}
