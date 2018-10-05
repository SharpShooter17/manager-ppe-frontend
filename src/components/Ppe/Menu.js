import React, {Component} from 'react'
import {MenuItem, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <NavDropdown title="PPE" id="basic-nav-dropdown">
                <MenuItem><Link to={'/ppe/find'}>Wyszukaj</Link></MenuItem>
            </NavDropdown>
        )
    }
}