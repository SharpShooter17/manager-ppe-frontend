import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Form, Text, Checkbox} from 'informed'
import {toast} from "react-toastify";
import SettlementService from "../../api/SettlementService";
import SelectTariff from "../Tariff/SelectTariff";

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tariff: ''
        };

        this.renderZones.bind(this);
        this.handleChangeTariff.bind(this);
        this.handleSubmit.bind(this);
    }

    handleChangeTariff = (newValue) => {
        this.setState({
            tariff: newValue.value
        });
        console.log(newValue.value);
    };

    handleSubmit = (data) => {
        console.log(data);

        let volumes = [];

        if (this.state.tariff.tariffs[0].transmissionZones.length >= 1) {
            volumes.push({zone: "FIRST", consumption: data.FIRST})
        }
        if (this.state.tariff.tariffs[0].transmissionZones.length >= 2) {
            volumes.push({zone: "SECOND", consumption: data.SECOND})
        }
        if (this.state.tariff.tariffs[0].transmissionZones.length >= 3) {
            volumes.push({zone: "THIRD", consumption: data.THIRD})
        }

        const settlement = {
            vatNumber: data.vatNumber,
            vatConstantNumber: data.vatConstantNumber,
            periodFrom: data.periodFrom,
            periodTo: data.periodTo,
            tariffId: this.state.tariff.id,
            power: data.power,
            comments: data.comments,
            electricityMeterNumber: this.props.electricityMeterNumber,
            provision: data.provision,
            tradeFee: data.tradeFee,
            reactiveEnergy: data.reactiveEnergy,
            initialSettlement: data.initialSettlement,
            consumptions: volumes
        };

        SettlementService.create(settlement).then((response) => {
            document.getElementById("createSettlement-form").reset();
            toast.success("Dodano rozliczenie");
        }).catch((error) => {
            toast.error("Błąd: " + error.message);
        });
    };

    renderZones() {
        const zoneMap = new Map();
        zoneMap.set("FIRST", "Pierwsza strefa:");
        zoneMap.set("SECOND", "Druga strefa:");
        zoneMap.set("THIRS", "Trzecia strefa:");

        if (this.state.tariff!== undefined && this.state.tariff.tariffs !== undefined) {
            return (this.state.tariff.tariffs[0].transmissionZones.map((zone, index) => {
                return (
                    <Row className="form-group">
                        <label htmlFor={zone.type} className="control-label col-xs-4">{zoneMap.get(zone.type)}</label>
                        <Col xs={8}>
                            <Text id={zone.type} name={zone.type} field={zone.type} type="number"
                                  required="required"
                                  className="form-control"/>
                        </Col>
                    </Row>
                )
            }))
        }
    }

    render() {
        return (
            <Form id="createSettlement-form" className="form-horizontal" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <Row>
                        <Col>
                            <Row className="form-group">
                                <label htmlFor="vatNumber" className="control-label col-xs-4">Numer vat:</label>
                                <Col xs={8}>
                                    <Text id="vatNumber" name="vatNumber" field="vatNumber" type="text"
                                          required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="vatConstantNumber" className="control-label col-xs-4">Stały numer
                                    vat:</label>
                                <Col xs={8}>
                                    <Text id="vatConstantNumber" name="vatConstantNumber" field="vatConstantNumber"
                                          type="text" required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="periodFrom" className="control-label col-xs-4">Okres rozliczeniowy
                                    od:</label>
                                <Col xs={8}>
                                    <Text id="periodFrom" name="periodFrom" field="periodFrom" type="date"
                                          required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="periodTo" className="control-label col-xs-4">Okres rozliczeniowy
                                    do:</label>
                                <Col xs={8}>
                                    <Text id="periodTo" name="periodTo" field="periodTo" type="date" required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="power" className="control-label col-xs-4">Moc umowna:</label>
                                <Col xs={8}>
                                    <Text id="power" name="power" field="power" type="number" min="0" step="0.01"
                                          required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="comments" className="control-label col-xs-4">Komentarz</label>
                                <Col xs={8}>
                                    <Text id="comments" name="comments" field="comments" type="text" required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="provision" className="control-label col-xs-4">Prowizja:</label>
                                <Col xs={8}>
                                    <Text id="provision" name="provision" field="provision" type="number" step="0.01"
                                          min="0" max="1" required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="tradeFee" className="control-label col-xs-4">Opłata handlowa:</label>
                                <Col xs={8}>
                                    <Text id="tradeFee" name="tradeFee" field="tradeFee" type="number" step="0.01"
                                          required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="reactiveEnergy" className="control-label col-xs-4">Energia
                                    bieżąca</label>
                                <Col xs={8}>
                                    <Text id="reactiveEnergy" name="reactiveEnergy" field="reactiveEnergy" type="number"
                                          step="0.01" required="required"
                                          className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="initialSettlement" className="control-label col-xs-4">Pierwsza
                                    faktura</label>
                                <Col xs={8}>
                                    <Checkbox field="initialSettlement" id="initialSettlement"/>
                                </Col>
                            </Row>
                            <Row>
                                <label htmlFor="initialSettlement" className="control-label col-xs-4">Taryfa:</label>
                                <Col xs={8}>
                                    <SelectTariff name="tariff" id="tariff"
                                                  handleChange={this.handleChangeTariff}/>
                                </Col>
                            </Row>
                            {this.renderZones()}
                            <Row className="form-group">
                                <Col xsOffset={4} xs={8}>
                                    <button name="submit" type="submit" className="btn btn-primary">Dodaj rozliczenie
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Form>
        )
    }
}