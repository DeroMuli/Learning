import React from "react"
import { Form , ButtonGroup , Button} from "react-bootstrap"
import EmailInput from "./EmailInput"
import IssueTypeInput from "./IssueTypeInput"
import DepartmentInput from "./DepartmentInput"
import CommentsInput from "./CommentsInput"
import {connect} from 'react-redux'
import {addTicket} from '../actions/TicketActions'
import SubmitedModal from "./SubmitedModal"
class TicketForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            modalvisible : false
        }
        this.handlersubmit = this.handlersubmit.bind(this)
        this.hidemodal = this.hidemodal.bind(this)
    }

    hidemodal(event){
        this.setState(
            {
                modalvisible : false
            }
        )
    }

    handlersubmit(event){
        event.preventDefault()
        let email  = this.refs.email.refs.email.value.trim()
        let issueType = this.refs.issue.refs.issue.value.trim()
        let department = this.refs.dep.refs.dep.value.trim()
        let comment = this.refs.comments.refs.comments.value.trim()
        this.props.dispatch(addTicket(email,department,issueType,comment,(new Date()).toDateString()))
        this.clearinputs()
        this.setState(
            {
                modalvisible : true
            }
        )
    }

    clearinputs(){
        this.refs.email.refs.email.value = ""
        this.refs.issue.refs.issue.value = ""
        this.refs.dep.refs.dep.value = ""
        this.refs.comments.refs.comments.value = ""
    }

    render(){
        const style = {color: "#ffaaaa"}
        return (
            <div>
            <SubmitedModal show={this.state.modalvisible} onhide={this.hidemodal}/>
            <Form onSubmit={this.handlersubmit}>
                <EmailInput style = {style} ref = 'email'/>
                <IssueTypeInput style = {style} ref = 'issue'/>
                <DepartmentInput style = {style} ref = 'dep'/>
                <CommentsInput style = {style} ref='comments' />
                <ButtonGroup style={{margin : '10px'}}>
                    <Button type="submit" style = {{marginRight : '10px'}}> Submit </Button>{' '}
                    <Button type="reset"> Cancel </Button>{' '}
                </ButtonGroup>
            </Form>
            </div>
        )
    }
}

export default connect()(TicketForm)