import React from "react";
import { InputGroup , FormControl , Button} from "react-bootstrap";
import {addUser} from '../actions/UsersActions'
import { connect } from "react-redux"
class AddUserInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name : ''
        }
        this.onchange = this.onchange.bind(this)
        this.onsubmit = this.onsubmit.bind(this)
    }

    onsubmit = function(event){
        let name = this.state.name
        this.props.dispatch(addUser(name))
        this.setState(
            {
                name : ''
            }
        )
    }

    onchange = function(event){
        this.setState({
            name : event.target.value
        })
    }

    render (){
        return (
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Type the name of the user to add"
              value={this.state.name}
              onChange = {this.onchange}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={this.onsubmit}>
              Add
            </Button>
          </InputGroup>
        )
    }
}


export default connect()(AddUserInput)