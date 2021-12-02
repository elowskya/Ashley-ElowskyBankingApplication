import { Link } from "react-router-dom";

import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link><Link to="/">The River Bank</Link></Nav.Link>
      <Nav.Link><Link to="/CreateAccount">Create Account</Link></Nav.Link>
      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
      <Nav.Link><Link to="/deposit">Deposit</Link></Nav.Link>
      <Nav.Link><Link to="/withdraw">Withdraw</Link></Nav.Link>
      <Nav.Link><Link to="/alldata">All Data</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}
