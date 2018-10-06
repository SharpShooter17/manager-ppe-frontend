import React, {Component} from 'react'
import {Row, Col, Button, ButtonToolbar} from 'react-bootstrap'
import {toast} from "react-toastify";
import TariffService from "../../api/TariffService";
import {Form, Text} from 'informed'

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit.bind(this);
    }

    handleSubmit = (data) => {
        console.log(data);

        let zones = [
            {
                type: 'FIRST',
                price: data.price_1,
                proportionOfConsumption: data.proportionOfConsumption_1,
                networkFee: data.networkFee_1
            }];

        if (data.price_2 !== undefined && data.proportionOfConsumption_2 !== undefined && data.networkFee_2 !== undefined && data.price_2 !== "" && data.proportionOfConsumption_2 !== "" && data.networkFee_2 !== "") {
            zones.push({
                type: 'SECOND',
                price: data.price_2,
                proportionOfConsumption: data.proportionOfConsumption_2,
                networkFee: data.networkFee_2
            })
        }

        if (data.price_3 !== undefined && data.proportionOfConsumption_3 !== undefined && data.networkFee_3 !== undefined && data.price_3 !== "" && data.proportionOfConsumption_3 !== "" && data.networkFee_3 !== "") {
            zones.push({
                type: 'THIRD',
                price: data.price_3,
                proportionOfConsumption: data.proportionOfConsumption_3,
                networkFee: data.networkFee_3
            })
        }


        const tariff = {
            code: data.code,
            tariffList: [{
                tariffValidFrom: data.validFrom,
                tariffValidTo: data.validTo,
                fixedTransmission: data.fixedTransmission,
                qualityFee: data.qualityFee,
                subscriptionFee: data.subscriptionFee,
                transitionalFee: data.transitionalFee,
                transmissionZones: zones
            }]
        };

        TariffService.create(tariff).then((response) => {
            document.getElementById("createSettlement-form").reset();
            toast.success("Dodano rozliczenie");
        }).catch((error) => {
            toast.error("Błąd: " + error.message);
        });
    };

    render() {
        return (
            <Form id="createTariff-form" className="form-horizontal" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <Row>
                        <Row className="form-group">
                            <label htmlFor="code" className="control-label col-xs-4">Kod taryfy</label>
                            <Col xs={8}>
                                <Text id="code" name="code" field="code" type="text" required="required"
                                      className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="validFrom" className="control-label col-xs-4">Taryfa ważna
                                od:</label>
                            <Col xs={8}>
                                <Text id="validFrom" name="validFrom" field="validFrom"
                                      type="date"
                                      required="required"
                                      className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="validTo" className="control-label col-xs-4">Taryfa ważna
                                do:</label>
                            <Col xs={8}>
                                <Text id="validTo" name="validTo" field="validTo" type="date"
                                      required="required"
                                      className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="fixedTranssmision" className="control-label col-xs-4">Przesyłowa
                                stała:</label>
                            <Col xs={8}>
                                <Text id="fixedTransmission" name="fixedTransmission"
                                      field="fixedTransmission" type="number" required="required"
                                      className="form-control" step="0.01"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="qualityFee" className="control-label col-xs-4">Opłata
                                jakościowa:</label>
                            <Col xs={8}>
                                <Text id="qualityFee" name="qualityFee" field="qualityFee" type="number"
                                      required="required"
                                      className="form-control" step="0.01"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="subscriptionFee" className="control-label col-xs-4">Opłata
                                abonencka:</label>
                            <Col xs={8}>
                                <Text id="subscriptionFee" name="subscriptionFee"
                                      field="subscriptionFee" type="number" required="required"
                                      className="form-control" step="0.01"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="transitionalFee" className="control-label col-xs-4">Opłata
                                przejściowa:</label>
                            <Col xs={8}>
                                <Text id="transitionalFee" name="transitionalFee"
                                      field="transitionalFee" type="number" required="required"
                                      className="form-control" step="0.01"/>
                                <hr/>
                            </Col>
                        </Row>
                        <Row>
                        <Col className={"text-center"} xsOffset={4} md={2}>
                            <h4>Strefa I</h4>
                        </Col>
                        <Col className={"text-center"} md={2}>
                            <h4>Strefa II</h4>
                        </Col>
                        <Col className={"text-center"} md={2}>
                            <h4>Strefa III</h4>
                        </Col>
                    </Row>
                        <Row className="form-group">
                            <label htmlFor="price" className="control-label col-xs-4">Przesyłowa zmienna:</label>
                            <Col md={2}>
                                <Text id="price_1" name="price_1" field="price_1" type="number" required="required"
                                      className="form-control" step="0.01" value=""/>
                            </Col>
                            <Col md={2}>
                                <Text id="price_2" name="price_2" field="price_2" type="number" className="form-control"
                                      step="0.01" value=""/>
                            </Col>
                            <Col md={2}>
                                <Text id="price_3" name="price_3" field="price_3" type="number" className="form-control"
                                      step="0.01" value=""/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="proportionOfConsumption" className="control-label col-xs-4">Proporcja
                                konsumpcji:</label>
                            <Col md={2}>
                                <Text id="proportionOfConsumption_1" name="proportionOfConsumption_1"
                                      field="proportionOfConsumption_1" type="number" required="required"
                                      className="form-control" step="0.01" min="0" max="1" value="1"/>
                            </Col>
                            <Col md={2}>
                                <Text id="proportionOfConsumption_2" name="proportionOfConsumption_2"
                                      field="proportionOfConsumption_2" type="number"
                                      className="form-control" step="0.01" min="0" max="1" value=""/>
                            </Col>
                            <Col md={2}>
                                <Text id="proportionOfConsumption_3" name="proportionOfConsumption_3"
                                      field="proportionOfConsumption_3" type="number"
                                      className="form-control" step="0.01" min="0" max="1" value=""/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="networkFee" className="control-label col-xs-4">Opłata sieciowa:</label>
                            <Col md={2}>
                                <Text id="networkFee_1" name="networkFee_1"
                                      field="networkFee_1" type="number" required="required"
                                      className="form-control" step="0.01" value=""/>
                            </Col>
                            <Col md={2}>
                                <Text id="networkFee_2" name="networkFee_2"
                                      field="networkFee_2" type="number"
                                      className="form-control" step="0.01" value=""/>
                            </Col>
                            <Col md={2}>
                                <Text id="networkFee_3" name="networkFee_3"
                                      field="networkFee_3" type="number"
                                      className="form-control" step="0.01" value=""/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xsOffset={4}>
                                <ButtonToolbar>
                                    <Button bsStyle="success" name="submit" type="submit" className="btn btn-primary">Dodaj
                                        taryfe</Button>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                    </Row>
                )}
            </Form>
        )
    }
}