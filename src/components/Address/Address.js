import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {CreateZipCodeChecker} from "./CreateZipCodeChecker";

export default class Address extends Component {
    render(){
        console.log('hello: ' + this.props.match.url)
        return(
            <div>
                <Route path={this.props.match.url + '/createZipChecker'} component={CreateZipCodeChecker}/>
            </div>
        );
    }
}