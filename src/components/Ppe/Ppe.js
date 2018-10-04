import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import PpeService from '../../api/PpeService'
import Address from '../Address/Address'
import {Link} from 'react-router-dom'

export default class Ppe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ppe: {},
            loaded: false
        };
    }

    componentDidMount() {
        PpeService.getByPhysicalId(this.props.match.params.physicalId).then((response) => {
            console.log(response.data);
            this.setState({
                ppe: response.data,
                loaded: true
            });
            console.log(response.data);
        });
    }

    render() {
        if (this.state.loaded) {
            return (
                <Row>
                    <Col md={6} sm={6}>
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
                                Klient: <Link to={'/client/' + this.state.ppe.client.code}>{this.state.ppe.client.name}</Link>
                            </Col>
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