import {Col,Row,Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css'

function App() {
  

  return (
    <>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <Container className="mt-2">
         <Row>
            <Col lg={6} md={6} sm={12} className="bg-success text-white p-2">
             <h1> First Column</h1>
            <Button variant="danger">Click</Button>
            <Button variant="danger">Click</Button>
             
            </Col>

            <Col lg={6} md={6} sm={12} className="bg-danger text-white p-2 ">
            <h1> Second Column</h1>
            <Button variant="success">Click</Button>
            </Col>
         </Row>
      </Container>
    
        
    </>
  )
}

export default App
