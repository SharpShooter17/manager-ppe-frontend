import React, {Component} from 'react'
import EmService from '../../api/ElectricityMeterService'
import {Row, Col} from 'react-bootstrap'
import {toast} from "react-toastify";
import Address from "../Address/Address";
import {Link} from "react-router-dom"
import SettlementCreate from '../Settlement/Create'

export default class ElectricityMeter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            em: {},
            loadedEm: false
        };

        this.loadEm.bind(this);
    }

    loadEm(){
        EmService.byNumber(this.props.match.params.number).then((response) => {
            this.setState({
                em: response.data,
                loadedEm: true
            });
        }).catch((error) => {
            toast.error();
        });
    }

    componentDidMount() {
        this.loadEm();
    }

    render() {
        if (this.state.loadedEm) {
            return (
                <Row>
                    <Col md={4} sm={6}>
                        <Row>
                            <Col>Numer licznika: {this.state.em.number}</Col>
                        </Row>
                        <Row>
                            <Col>Numer PPE: <Link to={'/ppe/' + this.state.em.ppe.physicalId}>{this.state.em.ppe.physicalId}</Link></Col>
                        </Row>
                        <Row>
                            <Col>Data montażu: {this.state.em.assembly}</Col>
                        </Row>
                        <Row>
                            <Col>Data demontażu: {this.state.em.deassembly}</Col>
                        </Row>
                        <Row>
                            <Col>Klient: <Link to={'/client/' + this.state.em.ppe.client.code}>{this.state.em.ppe.client.name}</Link></Col>
                        </Row>
                        <Row>
                            <Col>Adres: <Address address={this.state.em.ppe.address}/></Col>
                        </Row>
                    </Col>
                    <Col md={8} sm={6}>
                        <Row>
                            <Col>
                                <h4>Dodaj rozliczenie</h4>
                                <hr/>
                                <SettlementCreate/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Rozliczenia</h4>
                                <hr/>
                            </Col>
                        </Row>
                    </Col>
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