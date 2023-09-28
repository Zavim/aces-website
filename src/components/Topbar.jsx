import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Topbar(props) {
  const { logo } = props;
  return (
    <Navbar variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/">{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about#soi">Activities</NavDropdown.Item>
              {/* <NavDropdown.Item href="/about#team">Our Team</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="/media#videos">Videos</NavDropdown.Item>
              <NavDropdown.Item href="/media#photos">Photos</NavDropdown.Item>
              <NavDropdown.Item href="/media#newspaper">
                Newspaper
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#donation">Donate</Nav.Link>
            <Nav.Link href="/ACESPacket.pdf">Sign Up!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
