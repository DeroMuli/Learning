import React from "react"
import { FormSelect } from "react-bootstrap"
class IssueTypeInput extends React.Component{
    render() {
        return (
        <div className='form-group'>
            <label htmlFor='issueType'> Issue Type <span style={this.props.style}>*</span>
            </label>
            <FormSelect className='form-control' id='issueType' required>
                <option value=""> ---Select--- </option>
                <option value="Access Related Issue"> Access Related Issue </option>
                <option value="Email Related Issues"> Email Related Issues </option>
                <option value="Hardware Request"> Hardware Request </option>
                <option value="Health & Safety"> Health & Safety </option>
            </FormSelect>
        </div>
        )
    }
}
export default IssueTypeInput