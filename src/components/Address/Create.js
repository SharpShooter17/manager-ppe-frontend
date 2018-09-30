// https://react-select.com/home#getting-started

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import AsyncSelect from 'react-select/lib/Async';

export default class Create extends Component {

    constructor(props){
        super(props);
        this.state = {
            input: ''
        };
    }

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ input: inputValue });
        return inputValue;
    };

    render() {
        return (
            <Row>
                <Col>
                    <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
                </Col>
            </Row>
        );
    }
}