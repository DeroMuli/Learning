import React from "react"
import { Button, ListGroupItem } from "react-bootstrap"
import {connect } from 'react-redux'
import {deleteUser} from '../actions/UsersActions'
class UserListItem extends React.Component{

    constructor(){
        super()
        this.delete = this.delete.bind(this)
    }

    delete = function(){
        this.props.dispatch(deleteUser(this.props.id))
    }
    render(){
        return (
            <ListGroupItem>
                <a href="#" className="float-start">
                    <img className="media-object img-thumbnail" src={"https://via.placeholder.com/64x64"}/>
                </a>
                <div className="fw-bold"> {this.props.name} </div>
                <div>
                <Button onClick={this.delete} className="float-end" variant="outline-danger" size= "sm">
                Delete the user
                </Button>
                <p>
                Loremipsum dolor sit amet, consecteturadipiscingelit.
                Praesentgravidaeuismod ligula,
                vel semper nuncblandit sit amet.
                </p>
                </div>
            </ListGroupItem>
        )
    }
}
export  default connect()(UserListItem)