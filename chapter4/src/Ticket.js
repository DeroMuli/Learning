import React from "react"
import TicketForm from "./TicketForm"
import { Container,Col,Row } from "react-bootstrap"
import List from "./List"
class Ticket extends React.Component{
    constructor(){
        super()
        this.state = {
            list : []
        }
        this.additem = this.additem.bind(this)
        this.updatelist = this.updatelist.bind(this)
    }

    updatelist(newlist){
        console.log(newlist)
        this.setState({
            list : newlist
        })
    }

    additem(item){
        let list = this.state.list
        list.push(item)
        this.updatelist(list)
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col sm={6}>
                        <h1> Add Ticket </h1>
                        <hr />
                        <List items = {this.state.list}/>
                        <TicketForm addTicketList = {this.additem} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Ticket