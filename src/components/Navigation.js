import { Link } from "react-router-dom";

import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">The River Bank</Nav.Link>
      <Nav.Link href="/CreateAccount">Create Account</Nav.Link>
      <Nav.Link href="/deposit">Deposit</Nav.Link>
      <Nav.Link href="/withdraw">Withdraw</Nav.Link>
      <Nav.Link href="/alldata">All Data</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}
