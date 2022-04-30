import React from "react"
import {Form , Button , Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {changeprofile} from '../actions/ProfileActions'
import ProfileModal from "./ProfileModal"
class EditProfile extends React.Component{

    constructor(){
        super()
        this.state = {
            first_name : "" ,
            last_name : "" ,
            joining_date : "",
            modalvisible : false
        }
        this.submited = this.submited.bind(this)
        this.firstnamechanged = this.firstnamechanged.bind(this)
        this.lastnamechenged = this.lastnamechenged.bind(this)
        this.datechanged = this.datechanged.bind(this)
        this.hidemodal = this.hidemodal.bind(this)
    }

    componentDidMount(){
        let first_name = this.props.profile.first_name
        let last_name = this.props.profile.last_name
        let joining_date = this.props.profile.joining_date
        this.setState( state =>{
            return {
                ...state,
                first_name,
                last_name,
                joining_date
            }
        }
        )
    }

    submited(event){
        event.preventDefault()
        this.props.dispatch(changeprofile(this.state.first_name,this.state.last_name,this.state.joining_date))
        this.setState(state => {
            return {
                ...state ,
                modalvisible : true
            }
        })
    }

    firstnamechanged(event){
        this.setState( state => {
            return {
                ...state ,
                first_name : event.target.value
            }
        })
    }

    lastnamechenged(event){
        this.setState(state => {
            return {
                ...state ,
                last_name : event.target.value
            }
        })
    }

    hidemodal(){
        this.setState(state => {
            return {
                ...state,
                modalvisible : false
            }
        })
    }

    datechanged(event){
        this.setState(state => {
            return {
                ...state ,
                joining_date : event.target.value
            }
        })
    }

    render(){
        return (
            <Container>
            <ProfileModal show={this.state.modalvisible} hidemodal={this.hidemodal} />
            <Form onSubmit={this.submited}>
                <Form.Group>
                    <Form.Label>
                        First Name
                    </Form.Label>
                    <Form.Control value={this.state.first_name} onChange={this.firstnamechanged} type="text" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Last Name
                    </Form.Label>
                    <Form.Control value={this.state.last_name} type="text" onChange={this.lastnamechenged} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Joining Date
                    </Form.Label>
                    <Form.Control value={this.state.joining_date} type="date" onChange={this.datechanged} required/>
                </Form.Group>
                <div style={{padding:'10px'}} >
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </div>
            </Form>
            </Container>
        )
    }
}
function maptoprops(state){
    const profile = state.Profile
    return {
        profile
    }
}
export default connect(maptoprops)(EditProfile)