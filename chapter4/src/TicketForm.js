import React from "react"
import { Form , ButtonGroup , Button} from "react-bootstrap"
import EmailInput from "./EmailInput"
import IssueTypeInput from "./IssueTypeInput"
import DepartmentInput from "./DepartmentInput"
import CommentsInput from "./CommentsInput"
class TicketForm extends React.Component{

    constructor(props){
        super(props)
        this.handlersubmit = this.handlersubmit.bind(this)
    }

    handlersubmit(event){
        event.preventDefault();
        let values = {
            date : new Date(),
            email : this.refs.email.refs.email.value.trim(),
            issueType : this.refs.issue.refs.issue.value.trim(),
            department : this.refs.dep.refs.dep.value.trim(),
            comment : this.refs.comments.refs.comments.value.trim()
        }
        this.props.addTicketList(values)
    }
    render(){
        const style = {color: "#ffaaaa"}
        return (
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
        )
    }
}

export default TicketForm