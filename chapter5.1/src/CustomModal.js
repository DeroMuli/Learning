import { Modal } from "react-bootstrap"
import React from "react"
import { Button } from "react-bootstrap"
class CustomModal extends React.Component{
    constructor(){
        super()
        this.state = {
            show : false
        }
        this.showmodal = this.showmodal.bind(this)
        this.closemodal = this.closemodal.bind(this)
        this.hidemodal = this.hidemodal.bind(this)
    }

    showmodal = function(){
        this.setState(
            {
                show : true
            }
        )
    }

    hidemodal = function(){
        if(window.confirm("Are you sure you want to cancel?"))
        this.closemodal()
    }

    closemodal = function(){
        this.setState(
            {
                show : false
            }
        )
    }
    render(){
        return (
            <div>
                <Button onClick={this.showmodal} >Open Modal</Button>
                <Modal show = {this.state.show} onHide = {this.closemodal}>
                    <Modal.Header closeButton>
                        Hello Bootstrap !
                    </Modal.Header>
                    <Modal.Body>
                        This a react Component powered bootstrap-react components
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hidemodal}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.closemodal}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CustomModal