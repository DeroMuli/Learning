import React from "react"
import {Button , Modal } from 'react-bootstrap'
import {Link } from 'react-router-dom'
class ProfileModal extends React.Component{
    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.hidemodal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Profile changed
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You changed your profile details
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hidemodal}>
                        OK
                    </Button>
                    <Button as={Link} to="/" variant="primary" >
                        Home
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ProfileModal