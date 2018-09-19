import React, {Component} from 'react'
import Validator from '../../api/Validator'
import AddressService from '../../api/AddressService'
import {Form, Text} from 'informed';

export class CreateZipCodeChecker extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        AddressService.createZipCodeChecker(data.pattern, data.code, data.name);
    }

    render() {
        return (
            <Form id="createZipCodeCheckerForm" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <div>
                        <div className="form-group row">
                            <label htmlFor="pattern" className="col-4 col-form-label">Pattern</label>
                            <div className="col-8">
                                <Text id="pattern" validator={Validator.notEmpty} required="required" name="pattern"
                                      type="text" className="form-control here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="code" className="col-4 col-form-label">Code</label>
                            <div className="col-8">
                                <Text id="code" validator={Validator.notEmpty} required="required" name="code"
                                      type="text" className="form-control here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-4 col-form-label">Name</label>
                            <div className="col-8">
                                <Text id="name" validator={Validator.notEmpty} required="required" name="name"
                                      type="text" className="form-control here"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-4 col-8">
                                <button name="submit" type="submit" className="btn btn-primary">Add cip code checker
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Form>
        );
    }
}