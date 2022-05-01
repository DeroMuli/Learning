import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Navigation'
import MainContent from './MainContent'
import { Container,Row ,Col } from 'react-bootstrap'
import './App.css';

const App = function () {

  return (
    <Container>
      <Navigation/>
      <hr />
      <Row>
        <Col>
        <MainContent />
        </Col>
      </Row>
    </Container>
  );
} 

export default App;
