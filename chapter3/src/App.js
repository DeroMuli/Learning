import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyApp from './MyApp'
import { Container , Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
        <MyApp/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
