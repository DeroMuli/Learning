import React from "react"
import ListPanel from "./ListPanel"
import { ListGroup } from "react-bootstrap"
class List extends React.Component{

    render(){
        let items = this.props.items
        let listitems = this.createlistelements(items)
        return (
            <div style={{padding:'10px'}}>
                <h2>Tickets</h2>
                <ListGroup>
                {listitems.length > 0 ? listitems : "You have not raised any ticket issues. Fill the form to submit a ticket"}
                </ListGroup>
            </div>
        )
    }

    createlistelements(items){
        return (
            items.map(
                function createlistelement(item){
                    return ( <ListPanel item= {item} ></ListPanel>)
                }
            ).reverse()
        )
    }
}

export default List