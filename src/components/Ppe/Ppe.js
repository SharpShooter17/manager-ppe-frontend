import React, {Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap'
import PpeService from '../../api/PpeService'
import Address from '../Address/Address'
import {Link} from 'react-router-dom'
import ElectricityMeterService from '../../api/ElectricityMeterService'
import ElectricityMeterForm from "../ElectricityMeter/Create";

export default class Ppe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ppe: {},
            electricityMeters: [{}],
            loadedPpe: false,
            loadedEm: false
        };
        this.updateEm.bind(this);
        this.handleUpdateEmEvent.bind(this);
    }

    updateEm = () => {
        ElectricityMeterService.byPpePhysicalId(this.props.match.params.physicalId).then((response) => {
            this.setState({
                electricityMeters: response.data,
                loadedEm: true
            });
        });
    };

    componentDidMount() {
        this.updateEm();

        PpeService.getByPhysicalId(this.props.match.params.physicalId).then((response) => {
            console.log(response.data);
            this.setState({
                ppe: response.data,
                loadedPpe: true
            });
            console.log(response.data);
        });
    }

    handleUpdateEmEvent = () => {
        console.log("update em");
        this.setState({
            loadedEm: false
        });
        this.updateEm();
    };

    render() {
        if (this.state.loadedPpe && this.state.loadedEm) {
            return (
                <Row>
                    <Col md={4} sm={6}>
                        <Row>
                            <Col md={6}>Numer ppe: {this.state.ppe.physicalId}</Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Address address={this.state.ppe.address}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                Klient: <Link
                                to={'/client/' + this.state.ppe.client.code}>{this.state.ppe.client.name}</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} sm={6}>
                        <Row>
                            <Col>
                                <h4>Dodaj licznik</h4>
                                <hr/>
                                <ElectricityMeterForm handle={this.handleUpdateEmEvent} ppeId={this.state.ppe.id}/>
                            </Col>
                        </Row>
                        <Row>
                            <h4>Liczniki</h4>
                            <hr/>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Numer</th>
                                    <th>Data montażu</th>
                                    <th>Data demontażu</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.electricityMeters.map((em, index) => {
                                    return (
                                        <tr>
                                            <td><Link to={'/electricityMeter/' + em.number}>{em.number}</Link></td>
                                            <td><Link to={'/electricityMeter/' + em.number}>{em.assembly}</Link></td>
                                            <td><Link to={'/electricityMeter/' + em.number}>{em.deassembly}</Link></td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                </Row>
            );
        } else {
            return (
                <div>
                    Loading..
                </div>
            )
        }
    }
}