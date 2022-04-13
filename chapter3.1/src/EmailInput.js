import React from "react";
class EmailInput extends React.Component{
    render(){
        return (
        <div className='form-group'>
            <label htmlFor='email'> Email  <span style={this.props.style}>*</span>
            </label>
            <input type= 'text' id = 'email' className='form-control' placeholder='Enter Email' required/>
        </div>
        )
    }
}

export default EmailInput