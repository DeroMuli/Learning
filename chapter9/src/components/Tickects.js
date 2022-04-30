import React from "react"
import { ListGroupItem , ListGroup , Container , Row , Col } from "react-bootstrap"
import TicketItem from "./TicketItem"
import {connect} from 'react-redux'
class Tickets extends React.Component {
    render(){
        let tickets = this.props.tickets
        let ticketitems = tickets.map( ticket => {
            return (
                <ListGroupItem>
                    <TicketItem email={ticket.email} department={ticket.department} issuetype={ticket.issuetype} message={ticket.message} id={ticket.id} date={ticket.date}/>
                </ListGroupItem>
            )
        })
        let ticketsview = (ticketitems.length > 0) ? ticketitems : (<p>You dont have any tickets </p>)
        return (
            <Container>
                <Row>
                    <Col md={6}>
                    <h2> Tickets </h2>
                    <hr />
                    <ListGroup>
                        {ticketsview}
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }

}

function maptoprops(state)  {
    const tickets = state.Ticket
    return {
        tickets
    }
}

export default connect(maptoprops)(Tickets)