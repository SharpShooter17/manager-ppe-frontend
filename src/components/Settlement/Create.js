import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import Form from 'informed'
import {toast} from "react-toastify";
import SettlementService from "../../api/SettlementService";

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
    }

    handleSubmit = (data) => {
        // SettlementService.create().then((response) => {
        //     document.getElementById("createSettlement-form").reset();
        //     toast.success("Dodano rozliczenie");
        // }).catch((error) => {
        //     toast.error("Błąd: " + error.message);
        // });
    };

    render () {
        return(
            <div>
                settlement
            </div>
        );

        return (
            <Form id="createSettlement-form" className="form-horizontal" onSubmit={data => this.handleSubmit(data)}>
                {({formApi}) => (
                    <Row>

                    </Row>
                )}
            </Form>
        )
    }
}