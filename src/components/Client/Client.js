import React, {Component} from 'react';
import {Row} from 'react-bootstrap'
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
                Kupa
            </Row>
        );
    }
}