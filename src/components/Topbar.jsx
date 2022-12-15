import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";
import acesLogo from "../images/ACES-logo-transparent-no-words.png";
import acesStar from "../images/ACES-logo-star.png";

export default function Topbar() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="navbar-logo"
            src={acesLogo}
            alt="ACES logo (the word aces spelled out with a star as the letter A)"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a href="/">
              <img
                className="home-button"
                src={acesStar}
                alt="star from ACES logo"
              />
            </a>
            <Nav.Link href="#">About</Nav.Link>
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
