import React from "react";
import { FormSelect } from "react-bootstrap";
class DepartmentInput extends React.Component{
    render() {
        return (
        <div className='form-group'>
            <label htmlFor='department'> Assign department <span style={this.props.style}>*</span></label>
            <FormSelect className='form-control' id = 'department' required>
                <option value=''> ---Select--- </option>
                <option value='Admin'> Admin </option>
                <option value='HR'> HR </option>
                <option value='IT'> IT </option>
                <option value='Development'> Development </option>
            </FormSelect>
        </div>
        )
    }
}

export default DepartmentInput