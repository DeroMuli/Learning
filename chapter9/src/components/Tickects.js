import React from "react"
import { ListGroupItem , ListGroup , Container , Row , Col } from "react-bootstrap"
import TicketItem from "./TicketItem"
import axios from "axios"
import {connect} from 'react-redux'
import {getTickets} from '../actions/TicketActions'
class Tickets extends React.Component {

    componentDidMount(){
        axios.get('http://localhost:8080/api/tickets').then(res => {
            this.props.dispatch(getTickets(res.data))
        }).catch( err => {
            console.log(err)
        })
    }
    render(){
        let tickets = this.props.tickets
        let ticketitems = tickets.map( ticket => {
            return (
                <ListGroupItem>
                    <TicketItem email={ticket.email} department={ticket.department} issuetype={ticket.issuetype} message={ticket.comment} id={ticket._id} date={ticket.date}/>
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