import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import TicketForm from "./TicketForm"
class NewTicket extends React.Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col md={8}>
                     <h2> New Ticket</h2>
                     <hr />
                     <TicketForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewTicket