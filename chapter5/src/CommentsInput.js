import React from "react"
import { Form } from "react-bootstrap"
import BootStrapAlert from "./BootStrapAlert"
class CommentsInput extends React.Component{
    constructor(){
        super()
        this.max_char = '140'
        this.state = {
            value : '',
            char_left : this.max_char,
            show : false
        }
        this.handlerchange = this.handlerchange.bind(this)
    }

    handlerchange(e){
        let curinput =  e.target.value
        let char_left = this.max_char - curinput.length
        let show = (char_left == 0)
        this.setState(
            {
                value : curinput,
                char_left : char_left,
                show : show
            }
        )
    }

    render(){
        return (
            <div>
                <BootStrapAlert show = {this.state.show}/>
                <Form.Group>
                    <Form.Label htmlFor="comments">
                        Comments <span style={this.props.style}> * </span>
                        (<span>{this.state.char_left}</span> characters left)
                    </Form.Label>
                    <textarea ref = 'comments' className="form-control" value={this.state.value} maxLength = {this.max_char} onChange = {this.handlerchange} required/>
                </Form.Group>
            </div>
        )
    }
}

export default CommentsInput