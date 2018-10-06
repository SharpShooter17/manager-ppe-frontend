import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import ClientMenu from './Client/Menu'
import PpeMenu from './Ppe/Menu'
import TariffMenu from './Tariff/Menu'

export class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="navbar-brand" to="/">Menadżer Punktów Poboru Energii</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <ClientMenu/>
                    <PpeMenu/>
                    <TariffMenu/>
                </Nav>
            </Navbar>
        );
    }
}
