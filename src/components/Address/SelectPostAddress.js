// https://react-select.com/home#getting-started

import React, {Component} from 'react';
import AsyncSelect from 'react-select/lib/Async';
import AddressService from "../../api/AddressService";

export default class SelectPostAddress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.promiseOptions.bind(this);
    }

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({input: inputValue});
        return inputValue;
    };


    async promiseOptions(inputValue) {
        if (inputValue.length < 2) {
            return;
        }

        let addresses = await AddressService.getByPostalCodeLike(inputValue).then(function (response) {
            return response.data;
        });

        return addresses.map(address => {
            return {label: address.zipCode + ' ' + address.address, value: address.id};
        });
    };

    render() {
        return (
            <AsyncSelect
                placeholder={'Wybierz'}
                cacheOptions
                defaultOptions
                loadOptions={this.promiseOptions}
                onChange={this.props.handleChange}/>

        );
    }
}