import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Form, Text} from 'informed'
import {toast} from "react-toastify";
import moment from 'moment';
import DatePicker from 'react-datepicker';
import ElectricityMeterService from "../../api/ElectricityMeterService";

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assembly: moment(),
            deassembly: null
        };

        this.handleSubmit.bind(this);
        this.handleChangeAssembly.bind(this);
        this.handleChangeDeassembly.bind(this);
    }

    handleChangeAssembly = (date) => {
        this.setState({
            assembly: date
        });
    };

    handleChangeDeassembly = (date) => {
        this.setState({
            deassembly: date
        });
    };

    handleSubmit = (data) => {
        ElectricityMeterService.create(data.number, this.state.assembly, this.state.deassembly, this.props.ppeId).then((response) => {
            toast.success("Dodano licznik");
            document.getElementById("createElectricityMeter-form").reset();
        }).catch((error) => {
            toast.error("Błąd: " + error.message);
        });
        this.props.handle();
    };

    render() {
        return (
            <Form id="createElectricityMeter-form" className="form-horizontal" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <Row>
                        <Row className="form-group">
                            <label htmlFor="ppe" className="control-label col-xs-4">Numer licznika</label>
                            <Col xs={8}>
                                <Text id="number" name="number" field="number" type="text" required="required"
                                      className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="name" className="control-label col-xs-4">Data montażu</label>
                            <Col xs={8}>
                                <DatePicker
                                    dateFormat={'YYYY-MM-DD'}
                                    selected={this.state.assembly}
                                    onChange={this.handleChangeAssembly}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="street" className="control-label col-xs-4">Data demontażu</label>
                            <Col xs={8}>
                                <DatePicker
                                    dateFormat={'YYYY-MM-DD'}
                                    selected={this.state.deassembly}
                                    onChange={this.handleChangeDeassembly}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xsOffset={4} xs={8}>
                                <button name="submit" type="submit" className="btn btn-primary">Dodaj licznik do PPE</button>
                            </Col>
                        </Row>
                    </Row>
                )}
            </Form>
        )
    }

}