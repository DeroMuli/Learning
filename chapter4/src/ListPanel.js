import React from "react"
import { ListGroupItem , Card } from "react-bootstrap"
class ListPanel extends React.Component{
    render(){
        let item = this.props.item
        return (
        <ListGroupItem>
        <Card>
            <Card.Body>
                {item.issueType}<br/>
                {item.email}<br/>
                {item.comment}
            </Card.Body>
            <Card.Footer>
                {item.date.toString()}
            </Card.Footer>
        </Card>
        </ListGroupItem>
        )
    }
}

export default ListPanel