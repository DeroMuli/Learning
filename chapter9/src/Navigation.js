import React from 'react'
import { Nav , Navbar , Container , NavDropdown  } from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Navigation extends React.Component{
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#">EIS</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to="/editprofile">Edit Profiles</Nav.Link>
                  <NavDropdown title="Help Desk" id="basic-nav-dropdown">
                    <NavDropdown.Item  as={Link} to="/viewticket">View Ticket</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/addticket'>New Ticket </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
}
}

export default Navigation