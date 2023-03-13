import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import acesLogo from "/ACES-logo-transparent-no-words.png";
// import acesStar from "../images/ACES-logo-star.png";

export default function Topbar() {
  return (
    <Navbar variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            className="navbar-logo"
            src={acesLogo}
            alt="ACES logo (the word aces spelled out with a star as the letter A)"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Programs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Summer of Innovation</NavDropdown.Item>
              <NavDropdown.Item href="#">Community Service</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Videos</NavDropdown.Item>
              <NavDropdown.Item href="#">Photos</NavDropdown.Item>
              <NavDropdown.Item href="#">Newspaper</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
