import React from "react"
import { Form , ButtonGroup , Button} from "react-bootstrap"
import EmailInput from "./EmailInput"
import IssueTypeInput from "./IssueTypeInput"
import DepartmentInput from "./DepartmentInput"
import CommentsInput from "./CommentsInput"
class TicketForm extends React.Component{
    render(){
        const style = {color: "#ffaaaa"}
        return (
            <Form>
                <EmailInput style = {style}/>
                <IssueTypeInput style = {style} />
                <DepartmentInput style = {style} />
                <CommentsInput style = {style}/>
                <ButtonGroup style={{margin : '10px'}}>
                    <Button type="submit" style = {{marginRight : '10px'}}> Submit </Button>{' '}
                    <Button type="reset"> Cancel </Button>{' '}
                </ButtonGroup>
            </Form>
        )
    }
}

export default TicketForm