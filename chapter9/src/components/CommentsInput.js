import React from "react"
import { Form } from "react-bootstrap"
class CommentsInput extends React.Component{
    constructor(){
        super()
        this.max_char = '140'
        this.state = {
            value : '',
            char_left : this.max_char
        }
        this.handlerchange = this.handlerchange.bind(this)
    }

    handlerchange(e){
        let curinput =  e.target.value
        this.setState(
            {
                value : curinput,
                char_left : this.max_char - curinput.length
            }
        )
    }

    render(){
        return (
                <Form.Group>
                    <Form.Label htmlFor="comments">
                        Comments <span style={this.props.style}> * </span>
                        (<span>{this.state.char_left}</span> characters left)
                    </Form.Label>
                    <textarea ref = 'comments' className="form-control" value={this.state.value} maxLength = {this.max_char}  onChange = {this.handlerchange} required/>
                </Form.Group>
        )
    }
}

export default CommentsInput