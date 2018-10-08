import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import TariffService from "../../api/TariffService";
import {Grid, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const KEYS_TO_FILTERS = ['name', 'code'];

export default class Finder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            tariffs: [{}]
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
    }

    componentDidMount() {
        TariffService.getAll().then((response) => {
            this.setState({
                tariffs: response.data
            });
            console.log(response.data)
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <SearchInput placeholder="Wyszukaj taryfy" className="search-input"
                                     onChange={this.searchUpdated}/>
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>Unikalny kod</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.tariffs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).map(tariff => {
                                return (
                                    <tr key={tariff.id}>
                                        <td><Link to={'/tariff/' + tariff.code}>{tariff.code}</Link></td>
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