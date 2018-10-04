import React, {Component} from 'react'

export default class Address extends Component {
    render() {
        return (
            <span>
                {this.props.address.name} <br/>
                {this.props.address.street + ' ' + this.props.address.postAddress.zipCode + ' ' + this.props.address.postAddress.city.city}
                <br/>
                {this.props.address.postAddress.city.county.county} <br/>
                {this.props.address.postAddress.city.county.voivodeship.voivodeship}
            </span>
        )
    }
}