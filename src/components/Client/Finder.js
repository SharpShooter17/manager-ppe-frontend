import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import ClientService from "../../api/ClientService";
import {Grid, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const KEYS_TO_FILTERS = ['name', 'code'];

export default class Finder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            clients: [{}]
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
    }

    componentDidMount() {
        ClientService.getAll().then((response) => {
            this.setState({
                clients: response.data
            });
            console.log(response.data)
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <SearchInput placeholder="Wyszukaj klienta" className="search-input"
                                     onChange={this.searchUpdated}/>
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Nazwa</th>
                                <th>Unikalny kod</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.clients.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).map(client => {
                                return (

                                    <tr key={client.id}>
                                        <td><Link to={'/client/' + client.code}>{client.id}</Link></td>
                                        <td><Link to={'/client/' + client.code}>{client.name}</Link></td>
                                        <td><Link to={'/client/' + client.code}>{client.code}</Link></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}