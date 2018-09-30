import {Component} from "react";
import {MenuItem, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export default class Menu extends Component {
    render() {
        return (
            <NavDropdown title="Klient" id="basic-nav-dropdown">
                <MenuItem><Link to={'/client/create'}>Dodaj</Link></MenuItem>
                <MenuItem><Link to={'/client/find'}>Wyszukaj</Link></MenuItem>
            </NavDropdown>
        );
    }
}