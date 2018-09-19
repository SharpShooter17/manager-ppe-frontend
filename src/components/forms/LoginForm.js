import React, {Component} from 'react';
import AuthService from '../../api/AuthService';
import {Form, Text} from 'informed';
import Validator from '../../api/Validator'

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
        this.state = {unauthorized: ''};
    }

    handleSubmit(data) {
        AuthService.signin(data.username, data.password)
            .catch((error) => {
                this.setState({
                    unauthorized: 'Bad password or e-mail'
                });
            })
        this.props.loggedSuccessfully();
    }

    render() {
        return (
            <Form id="loginForm" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <div>
                        <div className="form-group row">
                            <label className="col-2 col-form-label" htmlFor="username">Username</label>
                            <div className="col-10">
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <Text id="username" field="username" name="username" validate={Validator.email}
                                          required="required" className="form-control here"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 offset-2">
                                <span className="text-danger">{formApi.getError('username')}</span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password" className="col-2 col-form-label">Password</label>
                            <div className="col-10">
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-lock"></i>
                                    </div>
                                    <Text id="password" field="password" name="password" validate={Validator.password}
                                          type="password" required="required" className="form-control here"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 offset-2">
                                <span className="text-danger">{formApi.getError('password')}</span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="offset-2 col-10">
                                <button name="submit" type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-10 offset-2">
                                <span className="text-danger">{this.state.unauthorized}</span>
                            </div>
                        </div>
                    </div>
                )}
            </Form>
        );
    }
}
