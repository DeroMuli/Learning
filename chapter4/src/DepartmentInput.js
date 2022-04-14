import React from "react"
import { Form } from "react-bootstrap"
class DepartmentInput extends React.Component{
    render(){
        return (
            <Form.Group>
                <Form.Label htmlFor="department"> Assign Department <span style={this.props.style}> * </span></Form.Label>
                <Form.Select id = "department" required>
                    <option value=''> ---Select--- </option>
                    <option value='Admin'> Admin </option>
                    <option value='HR'> HR </option>
                    <option value='IT'> IT </option>
                    <option value='Development'> Development </option>
                </Form.Select>
            </Form.Group>
        )
    }
}

export default DepartmentInput