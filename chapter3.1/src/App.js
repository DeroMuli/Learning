import React from 'react'
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';

const App = function () {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <h2> Add Ticket </h2>
          <hr />
          <Form/>
        </Col>
      </Row>
    </Container>
  );
} 

export default App;
