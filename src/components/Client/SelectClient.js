// https://react-select.com/home#getting-started

import React, {Component} from 'react';
import AsyncSelect from 'react-select/lib/Async';
import ClientService from "../../api/ClientService";

export default class SelectClient extends Component {

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
        if (inputValue.length < 1) {
            return;
        }

        let clients= await ClientService.getClientByNameLike(inputValue).then(function (response) {
            return response.data;
        });

        return clients.map(address => {
            return {label: address.name, value: address.id};
        });
    };

    render() {
        return (
            <AsyncSelect
                placeholder={'Wybierz'}
                defaultOptions
                loadOptions={this.promiseOptions}
                onChange={this.props.handleChange}/>

        );
    }
}