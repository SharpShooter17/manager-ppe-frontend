import React, {Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap'
import ClientService from "../../api/ClientService";

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: {}
        };
    }

    componentDidMount() {
        ClientService.getByCode(this.props.match.params.code).then((response) => {
            this.setState({
                client: response.data
            });
            console.log(response.data);
        });
    }

    render() {
        return (
            <Row>
                <Col md={3} sm={6}>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Nazwa</td>
                            <td>{this.state.client.name}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h3>Punkty Poboru Energii</h3>
                </Col>
            </Row>
        );
    }
}