import UserList from './components/UserList';
import AddUserInput from './components/AddUserInput'
import { Container , Row , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <h1>UserList</h1>
          <hr />
          <AddUserInput />
          <UserList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
