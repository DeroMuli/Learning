import React from 'react';
import { Nav , Navbar , Container , NavDropdown  } from 'react-bootstrap';
class Navigation extends React.Component{
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#">EIS</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/editprofile">Edit Profiles</Nav.Link>
                  <NavDropdown title="Help Desk" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/viewticket">View Ticket</NavDropdown.Item>
                    <NavDropdown.Item href="/addticket">New Ticket</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
}
}

export default Navigation