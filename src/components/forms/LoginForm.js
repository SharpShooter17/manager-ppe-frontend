import React, { Component } from 'react';
import authController from '../../api/AuthController'

export class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChangeUsername.bind(this);
    this.handleChangePassword.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  }


  handleChangePassword = event =>{
    this.setState({password: event.target.value});
  }


  handleSubmit = event => {
      console.log('Login request submitted');
      console.log(authController.signin(this.state.username, this.state.password));
      event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-2 col-form-label" htmlFor="username">Username</label>
          <div className="col-10">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-user"></i>
              </div>
              <input value={this.state.username} onChange={this.handleChangeUsername} id="username" name="username" type="text" required="required" className="form-control here" />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-2 col-form-label">Password</label>
          <div className="col-10">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-lock"></i>
              </div>
              <input value={this.state.password} onChange={this.handleChangePassword} id="password" name="password" type="password" required="required" className="form-control here" />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-2 col-10">
            <button name="submit" type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
    );
  }
}
