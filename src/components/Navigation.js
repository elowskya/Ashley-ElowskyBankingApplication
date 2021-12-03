import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md">
    <Container>
    <Navbar.Brand><Link to="/">The River Bank</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to="/CreateAccount">Create Account</Link></Nav.Link>
      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
      <Nav.Link><Link to="/balance">Balance</Link></Nav.Link>
      <Nav.Link><Link to="/deposit">Deposit</Link></Nav.Link>
      <Nav.Link><Link to="/withdraw">Withdraw</Link></Nav.Link>
      <Nav.Link><Link to="/alldata">All Data</Link></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
