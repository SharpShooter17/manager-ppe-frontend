// https://reacttraining.com/react-router/web/api/Route

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import {Header} from './Header'
import {Footer} from './Footer'
import {Home} from './Home'

export class Root extends Component {
  render(){
    return (
        <div className="container">
          <div className="row">
            <Header />
          </div>

          <div className="row">
            <div className="col">
              <main>
                <Switch>
                  <Route exact path={'/'} component={ Home } />
                </Switch>
              </main>
            </div>
          </div>

          <div className="row">
            <Footer />
          </div>

        </div>
    );
  }
}
