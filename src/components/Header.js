import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Menu from './Address/Menu'
import {Navbar, Nav} from 'react-bootstrap'

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
                    <Menu/>
                </Nav>
            </Navbar>
        );
    }
}
