import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomModal from './CustomModal'
import { Row , Col, Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col sm = {6}>
        <h2>jQuery Bootstrap Modal with React</h2>
        <hr />
        <CustomModal />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
