import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationStyles.css';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md">
    <Container>
    <Navbar.Brand className="Nav_link"><Link className="styleLinks" style={{textDecoration:'none'}} to="/">The River Bank</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link class="nav-links"><Link className="styleLinks" to="/CreateAccount">Create Account</Link></Nav.Link>
      <Nav.Link class="nav-links"><Link className="styleLinks" to="/login">Login</Link></Nav.Link>
      <Nav.Link><Link className="styleLinks" to="/balance">Balance</Link></Nav.Link>
      <Nav.Link><Link className="styleLinks" to="/deposit">Deposit</Link></Nav.Link>
      <Nav.Link><Link className="styleLinks" to="/withdraw">Withdraw</Link></Nav.Link>
      <Nav.Link><Link className="styleLinks" to="/alldata">All Data</Link></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
