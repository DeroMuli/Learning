import React from 'react'
import { Form } from 'react-bootstrap'
class EmailInput extends React.Component{
    render(){
        return (
            <Form.Group>
                <Form.Label htmlFor='email'>Email <span style={this.props.style}> * </span></Form.Label>
                <Form.Control type='email' id='email' placeholder='Enter your email' required></Form.Control>
            </Form.Group>
        )
    }
}

export default EmailInput