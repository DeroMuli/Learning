import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row , Col } from 'react-bootstrap'
import TicketForm from './TicketForm'
import './App.css'

const App = function () {
  
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <h1> Add Ticket </h1>
          <hr />
          <TicketForm />
        </Col>
      </Row>
    </Container>
  );
} 

export default App;
