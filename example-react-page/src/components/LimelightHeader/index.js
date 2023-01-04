import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/musicman.jpeg";
import "./styles.css";

function LimelightHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="navbrand" href="#home">
          <img src={logo} style={{ width: 100, marginTop: -7 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">My Requests</Nav.Link>
            <Nav.Link href="#link">Browse Musicians</Nav.Link>
            <Nav.Link href="#link">Conversations</Nav.Link>
            <Nav.Link href="#link">Settings</Nav.Link>
          </Nav>
          <Nav>
            <Button bsStyle="primary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LimelightHeader;
