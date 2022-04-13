import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyApp from './MyApp'
import Clock from './Clock';
import { Container , Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
        <MyApp/>
        <div style={{position: "absolute", right: "10px", bottom: "10px"}}>
        <Clock />
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
