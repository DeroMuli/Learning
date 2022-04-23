import React from "react"
import UserListItem from "./UserListItem"
import { connect } from "react-redux"
import {ListGroup} from 'react-bootstrap'
class UserList extends React.Component{
    render(){
        let users = this.props.users
        let userslist = users.map( user => {
            return (
                <UserListItem id ={user.id} name = {user.name} />
            )
        })
        return (
            <ListGroup>
                {userslist}
            </ListGroup>
        )
    }
}

function mapStateToProps(state) {
    const users = state
    return {
        users
    };
  }

  export default connect(mapStateToProps)(UserList);