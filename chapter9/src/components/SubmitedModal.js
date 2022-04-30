import React from "react"
import { Modal , Button } from "react-bootstrap"
import {Link } from 'react-router-dom'
class SubmitedModal extends React.Component {

    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.onhide}>
                <Modal.Header closeButton >
                    <Modal.Title>
                        TICKET ADDED
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You added a new ticket
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onhide}>
                        OK
                    </Button>
                    <Button as={Link} to="/viewticket" variant="primary" >
                        View Tickets
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SubmitedModal