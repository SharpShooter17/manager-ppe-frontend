import React, {Component} from 'react'
import EmService from '../../api/ElectricityMeterService'
import {Row, Col, Table} from 'react-bootstrap'
import {toast} from "react-toastify";
import Address from "../Address/Address";
import {Link} from "react-router-dom"
import SettlementCreate from '../Settlement/Create'
import SettlementService from "../../api/SettlementService";
import Estimate from "./Estimate";

export default class ElectricityMeter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            em: {},
            loadedEm: false,
            settlements: [{}],
            loadedSettlements: false
        };

        this.handleCreateSettlementEvent.bind(this);
        this.loadEm.bind(this);
        this.loadSettlements.bind(this);
    }

    loadEm() {
        EmService.byNumber(this.props.match.params.number).then((response) => {
            this.setState({
                em: response.data,
                loadedEm: true
            });
        }).catch((error) => {
            toast.error();
        });
    }

    loadSettlements() {
        SettlementService.byElectricityMeterNumber(this.props.match.params.number).then((response) => {
            this.setState({
                settlements: response.data,
                loadedSettlements: true
            });
        }).catch((error) => {
            toast.error();
        });
    }

    componentDidMount() {
        this.loadEm();
        this.loadSettlements();
    }

    handleCreateSettlementEvent = () => {
        this.setState({
            loadedSettlements: false
        });
        this.loadSettlements();
    };

    render() {
        if (this.state.loadedEm && this.state.loadedSettlements) {
            return (
                <Row>
                    <Col md={4} sm={6}>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>Numer licznika: {this.state.em.number}</Col>
                                </Row>
                                <Row>
                                    <Col>Numer PPE: <Link
                                        to={'/ppe/' + this.state.em.ppe.physicalId}>{this.state.em.ppe.physicalId}</Link></Col>
                                </Row>
                                <Row>
                                    <Col>Data montażu: {this.state.em.assembly}</Col>
                                </Row>
                                <Row>
                                    <Col>Data demontażu: {this.state.em.deassembly}</Col>
                                </Row>
                                <Row>
                                    <Col>Klient: <Link
                                        to={'/client/' + this.state.em.ppe.client.code}>{this.state.em.ppe.client.name}</Link></Col>
                                </Row>
                                <Row>
                                    <Col>Adres: <Address address={this.state.em.ppe.address}/></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Estimate em={this.props.match.params.number}/>
                    </Col>
                    <Col md={8} sm={6}>
                        <Row>
                            <Col>
                                <h4>Dodaj rozliczenie</h4>
                                <hr/>
                                <SettlementCreate createEvent={this.handleCreateSettlementEvent}
                                                  electricityMeterNumber={this.props.match.params.number}/>
                            </Col>
                        </Row>
                    </Col>
                    <Row>
                        <Col>
                            <h4>Rozliczenia</h4>
                            <hr/>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Numer faktury</th>
                                    <th>Stały numer faktury</th>
                                    <th>Okres rozliczeniowy od</th>
                                    <th>Okres rozliczeniowy do</th>
                                    <th>Taryfa</th>
                                    <th>Moc umowna</th>
                                    <th>Komentarz</th>
                                    <th>Prowizja</th>
                                    <th>Opłata handlowa</th>
                                    <th>Opłata za moc bierną</th>
                                    <th>I strefa</th>
                                    <th>II strefa</th>
                                    <th>III strefa</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.settlements.map((s, i) => {
                                    return (
                                        <tr>
                                            <td>{s.vatNumber}</td>
                                            <td>{s.vatConstantNumber}</td>
                                            <td>{s.periodFrom}</td>
                                            <td>{s.periodTo}</td>
                                            <td>{s.tariff.code}</td>
                                            <td>{s.power}</td>
                                            <td>{s.comments}</td>
                                            <td>{s.provision}</td>
                                            <td>{s.tradeFee}</td>
                                            <td>{s.reactiveEnergy}</td>
                                            {s.volumeOfEnergyConsumptions.map((v, i) => {
                                                return (
                                                    <td>{v.volume}</td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Row>
            );
        } else {
            return (
                <div>
                    Loading ..
                </div>
            )
        }
    }
}