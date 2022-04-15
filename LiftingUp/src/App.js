import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container , Row , Col } from 'react-bootstrap';
import Calculator from './Calculator';
import './App.css';

const App = function () {
  return (
    <Container>
      <Row>
        <Col>
          <br />
          <Calculator />
        </Col>
      </Row>
    </Container>
  );
} 

export default App;
