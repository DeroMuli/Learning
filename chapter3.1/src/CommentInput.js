import React from 'react'
import { FormSelect } from 'react-bootstrap'
class CommentInput extends React.Component{
    render() {
        return (
            <div className='form-group'>
            <label htmlFor='comments'>
                Comments <span style={this.props.style}> * </span>
                (<span id='maxlength'> 200 </span> characters left)
            </label>
            <textarea className='form-control' rows='3' id='comments' required >
            </textarea>
        </div>
        )
    }
}

export default CommentInput