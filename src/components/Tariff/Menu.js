import {Component} from "react";
import {MenuItem, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export default class Menu extends Component {
    render() {
        return (
            <NavDropdown title="Taryfa" id="basic-nav-dropdown">
                <MenuItem><Link to={'/tariff/create'}>Dodaj</Link></MenuItem>
                <MenuItem><Link to={'/tariff/find'}>Wyszukaj</Link></MenuItem>
            </NavDropdown>
        );
    }
}