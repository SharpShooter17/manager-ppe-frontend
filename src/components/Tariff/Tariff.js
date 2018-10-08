import React, {Component} from 'react'
import {Row, Col, Table} from 'react-bootstrap'
import TariffService from "../../api/TariffService";


export default class Tariff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedTariff: false,
            tariff: {}
        };

        this.loadTariff.bind(this);
    }

    loadTariff() {
        TariffService.getByCode(this.props.match.params.code).then((response) => {
            this.setState({
                tariff: response.data,
                loadedTariff: true
            });
        })
    }

    componentDidMount() {
        this.loadTariff();
    }

    render() {
        if (this.state.loadedTariff) {
            return (
                <Row>
                    <Col>
                        <h3>Taryfa: {this.state.tariff.code}</h3>
                        <hr/>
                        <Table>
                            <thead>
                            <tr>
                                <th>Taryfa ważna od</th>
                                <th>Taryfa ważna do</th>
                                <th>Stała przesyłowa</th>
                                <th>Opłata jakościowa</th>
                                <th>Opłata abonencka</th>
                                <th>Opłata przejściowa</th>
                                <th>Opłata zmienna I</th>
                                <th>Opłata sieciowa I</th>
                                <th>Proporcja konsumcji I</th>
                                <th>Opłata zmienna II</th>
                                <th>Opłata sieciowa II</th>
                                <th>Proporcja konsumcji II</th>
                                <th>Opłata zmienna III</th>
                                <th>Opłata sieciowa III</th>
                                <th>Proporcja konsumcji III</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.tariff.tariffs.map((tariff, index) => {
                                return (
                                    <tr>
                                        <td>{tariff.tariffValidFrom}</td>
                                        <td>{tariff.tariffValidTo}</td>
                                        <td>{tariff.fixedTransmission}</td>
                                        <td>{tariff.quaityFee}</td>
                                        <td>{tariff.subscriptionFee}</td>
                                        <td>{tariff.transitionalFee}</td>
                                        {tariff.transmissionZones.map((zone, index) => {
                                            return (
                                                <React.Fragment>
                                                    <td>{zone.price}</td>
                                                    <td>{zone.networkFee}</td>
                                                    <td>{zone.proportionOfConsumption}</td>
                                                </React.Fragment>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}