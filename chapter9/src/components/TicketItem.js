import React from "react"
import {Button , Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {deleteTicket } from '../actions/TicketActions'
class TicketItem extends React.Component {

    constructor(){
        super()
        this.deleteticket = this.deleteticket.bind(this)
    }

    deleteticket = async function(event){
        console.log('here')
        axios.delete(`http://localhost:8080/api/tickets/${this.props.id}`).then(res => {
            console.log('here')
            this.props.dispatch(deleteTicket(this.props.id))
        }).catch(err => {
            console.log('error')
        })
    }
    render(){
        return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {`Email :  ${this.props.email} `} <br />
                    {`Department : ${this.props.department} `} <br />
                    {`IssueType : ${this.props.issuetype} `} <br />
                    {`Message  : ${this.props.message} `} <br />
                </Card.Text>
                <Card.Footer>
                <Button onClick={this.deleteticket} className="float-end" variant="outline-danger" size="sm"> Delete </Button>
                {this.props.date}
                </Card.Footer>
            </Card.Body>
        </Card>
        )
    }
}

export default connect()(TicketItem)