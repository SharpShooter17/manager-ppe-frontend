import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import ClientService from "../../api/ClientService";
import PpeService from "../../api/PpeService"
import Address from "../Address/Address";
import {Link} from "react-router-dom";
import PpeCreate from "../Ppe/Create"

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: {},
            loadedClient: false,
            ppes: [{}],
            loadedPpes: false
        };

        this.handlePpeAdded.bind(this);
        this.updatePpe.bind(this);
    }

    updatePpe = () => {
        PpeService.byClientCode(this.props.match.params.code).then((response) => {
            this.setState({
                ppes: response.data,
                loadedPpes: true
            });
        });
    };

    componentDidMount() {
        ClientService.getByCode(this.props.match.params.code).then((response) => {
            this.setState({
                client: response.data,
                loadedClient: true
            });
            console.log(response.data);
        });

        this.updatePpe();
        this.handlePpeAdded.bind(this)
    }

    handlePpeAdded = () => {
        this.setState({
            loadedPpes: false
        });
        this.updatePpe();
    };

    render() {
        if (this.state.loadedClient && this.state.loadedPpes) {
            return (
                <Row>
                    <Col md={3} sm={6}>
                        Nazwa: {this.state.client.name}
                    </Col>
                    <Col md={9} sm={6}>
                        <Row>
                            <Col>
                                <h4>Dodaj PPE</h4>
                                <hr />
                                <PpeCreate clientId={this.state.client.id} addedPpeEvent={this.handlePpeAdded} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Punkty Poboru Energii</h4>
                                <hr/>
                                {this.state.ppes.map((ppe, index) => {
                                    return (
                                        <Row>
                                            <Col md={6} sm={3}>
                                                <Link to={'/ppe/' + ppe.physicalId}>{ppe.physicalId}</Link>
                                            </Col>
                                            <Col md={6} sm={3}>
                                                <Address address={ppe.address}/>
                                            </Col>
                                        </Row>
                                    )
                                })}
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