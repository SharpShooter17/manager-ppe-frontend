import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import SelectPostAddress from '../Address/SelectPostAddress'
import {Form, Text} from 'informed'
import SelectClient from '../Client/SelectClient'
import PpeService from '../../api/PpeService'
import {toast} from "react-toastify";

export default class ElectricityMeterForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: '',
            client: ''
        };

        this.handleSubmit.bind(this);
        this.handleChangeAddress.bind(this);
    }

    handleChangeAddress = (newValue) => {
        this.setState({
            address: newValue.value
        });
    };

    handleChangeClient = (newValue) => {
        this.setState({
            client: newValue.value
        });
    };

    handleSubmit = (data) => {
        PpeService.create(data.ppe, data.name, data.street, this.state.address, this.state.client).then((response) => {
            toast.success("Dodano ppe");
            document.getElementById("createPpe-form").reset();
            this.setState({
                address: '',
                client: ''
            });
        }).catch((error) => {
            toast.error("Błąd: " + error.message);
        });
    };

    render() {
        return (
            <Form id="createPpe-form" className="form-horizontal" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <Row>
                        <Row className="form-group">
                            <label htmlFor="ppe" className="control-label col-xs-4">Numer PPE</label>
                            <Col xs={8}>
                                <Text id="ppe" name="ppe" field="ppe" type="text" required="required"
                                      className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="name" className="control-label col-xs-4">Imię i nazwisko lub nazwa
                                firmy</label>
                            <Col xs={8}>
                                <Text id="name" name="name" field="name" required="required" type="text"
                                      className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="street" className="control-label col-xs-4">Ulica i numer</label>
                            <Col xs={8}>
                                <Text field="street" id="street" name="street" type="text" className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="postAddress" className="control-label col-xs-4">Kod pocztowy</label>
                            <Col xs={8}>
                                <SelectPostAddress name="postAddress" id="postAddress"
                                                   handleChange={this.handleChangeAddress}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="client" className="control-label col-xs-4">Klient</label>
                            <Col xs={8}>
                                <SelectClient name="client" id="client" handleChange={this.handleChangeClient}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xsOffset={4} xs={8}>
                                <button name="submit" type="submit" className="btn btn-primary">Stwórz ppe</button>
                            </Col>
                        </Row>
                    </Row>
                )}
            </Form>
        )
    }

}