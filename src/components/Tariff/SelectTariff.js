// https://react-select.com/home#getting-started

import React, {Component} from 'react';
import AsyncSelect from 'react-select/lib/Async';
import TariffService from "../../api/TariffService";

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
        let tariff= await TariffService.byNameLike(inputValue).then(function (response) {
            return response.data;
        });

        return tariff.map(t => {
            return {label: t.code, value: t};
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