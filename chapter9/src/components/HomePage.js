import React from "react"
import HomeContent from "./HomeContent"
import {Container , Row ,Col} from 'react-bootstrap'
import ProfileSideBar from './ProfileSideBar'
class HomePage extends React.Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col sm={6} md={3} >
                        <ProfileSideBar />
                    </Col>
                    <Col sm={6} md={9}>
                        <HomeContent />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomePage