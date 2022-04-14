import React from "react"
import { Form } from "react-bootstrap"
class IssueTypeInput extends React.Component{
    render(){
        return (
        <Form.Group>
            <Form.Label htmlFor="issuetype">IssueType <span style={this.props.style}> * </span></Form.Label>
            <Form.Select id='issuetype' required>
                <option value=""> ---Select--- </option>
                <option value="Access Related Issue"> Access Related Issue </option>
                <option value="Email Related Issues"> Email Related Issues </option>
                <option value="Hardware Request"> Hardware Request </option>
                <option value="Health & Safety"> Health & Safety </option>
            </Form.Select>
        </Form.Group>
        )
    }
}

export default IssueTypeInput