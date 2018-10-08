import React, {Component} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import SelectTariff from '../Tariff/SelectTariff'
import ElectricityMeterService from "../../api/ElectricityMeterService";

export default class Estimate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tariff: {}
        };

        this.handleChangeTariff.bind(this);
        this.downloadEstimateReport.bind(this);
    }

    handleChangeTariff = (newValue) => {
        this.setState({
            tariff: newValue.value.code
        })
    };

    downloadEstimateReport = () => {
        ElectricityMeterService.downloadEstimateReport(this.state.tariff, this.props.em);
    };

    render() {
        return (
            <Row>
                <Col>
                    <SelectTariff handleChange={this.handleChangeTariff}/>
                    <Button onClick={this.downloadEstimateReport}>Pobierz raport szacunkowy</Button>
                </Col>
            </Row>
        )
    }
}