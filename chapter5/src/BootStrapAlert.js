import React from "react"
import { Alert } from "react-bootstrap"
import $ from 'jquery'
class BootStrapAlert extends React.Component{

    constructor(){
        super()
        this.handleclose = this.handleclose.bind(this)
    }
    
    handleclose(e){
        $(this.refs.alerBox).hide()
    }

    render(){
        let show = this.props.show;
        if(show){
            return (
            <Alert onClick={this.handleclose} variant="danger" ref='alerBox' dismissible>
                <strong>Ooops!</strong> You reached the max limit
            </Alert>
            )
        }
        else
           return null
    }
}

export default BootStrapAlert