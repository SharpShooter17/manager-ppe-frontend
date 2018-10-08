import React, {Component} from 'react';
import {Form, Text} from 'informed';
import ClientService from "../../api/ClientService";
import {toast} from 'react-toastify';


export default class CreateClientForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        ClientService.createClient(data.name)
            .then((response) => {
                document.getElementById("createClientForm").reset();
                toast.success("Dodano klienta");
            })
            .catch((error) => {
                toast.error("Błąd: " + error.message);
        });
    }

    render() {
        return (
            <Form id="createClientForm" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name" className="control-label col-xs-4">Nazwa</label>
                            <div className="col-xs-8">
                                <Text id="name" name="name" field="name" type="text" className="form-control"
                                      required="required"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-xs-offset-4 col-xs-8">
                                <button name="submit" type="submit" className="btn btn-primary">Stwórz nowego klienta
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Form>
        )
    }
}
