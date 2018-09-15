import React, { Component } from 'react';
import {LoginForm} from './forms/LoginForm';
import AuthService from '../api/AuthService';

export class Home extends Component {

  constructor(props){
    super(props);
    this.state = {logged: AuthService.isLogged()}
  }

  loggedScene(){
    return (
      <div>Jesteś zalogowany gratulacje... :D</div>
    )
  }

  guestScene(){
    return (
      <LoginForm loggedSuccessfully={() => {this.setState({logged: true})}} />
    )
  }

  render() {
    if ( this.state.logged ){
      return this.loggedScene();
    } else {
      return this.guestScene();
    }
  }
}
