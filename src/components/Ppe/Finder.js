import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import PpeService from "../../api/PpeService";
import {Grid, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const KEYS_TO_FILTERS = ['physicalId', 'client.name', 'address.city', 'address.street', 'address.zipCode'];

export default class Finder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            ppes: [{}],
            loaded: false
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
    }

    componentDidMount() {
        PpeService.getAll().then((response) => {
            console.log(response.data);
            let ppes_array = [];
            response.data.map((ppe, index) => {
                ppes_array.push({
                    physicalId: ppe.physicalId,
                    client: {
                        name: ppe.client.name
                    },
                    address: {
                        name: ppe.address.name,
                        street: ppe.address.street,
                        zipCode: ppe.address.postAddress.zipCode,
                        city: ppe.address.postAddress.city.city
                    }
                });
                return null;
            });

            this.setState({
                ppes: ppes_array,
                loaded: true
            });
        });
    }

    render() {
        if (this.state.loaded) {
            return (
                <Grid>
                    <Row>
                        <Col>
                            <SearchInput placeholder="Wyszukaj ppe" className="search-input"
                                         onChange={this.searchUpdated}/>
                            <Table striped bordered condensed hover>
                                <thead>
                                <tr>
                                    <th>PPE</th>
                                    <th>Klient</th>
                                    <th>Ulica</th>
                                    <th>Kod pocztowy</th>
                                    <th>Miejscowość</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.ppes.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).map(ppe => {
                                    return (

                                        <tr key={ppe.id}>
                                            <td><Link to={'/ppe/' + ppe.physicalId}>{ppe.physicalId}</Link></td>
                                            <td>{ppe.client.name}</td>
                                            <td>{ppe.address.street}</td>
                                            <td>{ppe.address.zipCode}</td>
                                            <td>{ppe.address.city}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Grid>
            )
        } else {
            return (
                <div>
                    Loading..
                </div>
            )
        }
    }
}