import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {
  render(){
    return(
      <div>
        <Link className="navbar-brand" to='/'>Menadżer Punktów Poboru Energii</Link>
      </div>
    );
  }

}
