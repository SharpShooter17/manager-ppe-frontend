import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {NavDropdown, MenuItem} from 'react-bootstrap'

export default class Menu extends Component {
    render() {
        return (
            <NavDropdown title="Address" id="address-dropdown-nav">
                <MenuItem><Link to="/address/createZipCodeChecker">Create zip code checker</Link></MenuItem>
            </NavDropdown>
        );
    }
}