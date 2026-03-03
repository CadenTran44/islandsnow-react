"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Pinterest, Instagram, HouseDoorFill, Search, PersonCircle, CartFill } from "react-bootstrap-icons";

const TopMenu = () => (
  <Navbar bg="light">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseDoorFill/></Nav.Link>
        <Nav.Link><Search/></Nav.Link>
        <Nav.Link><PersonCircle/></Nav.Link>
        <NavDropdown title={<><CartFill/> 0</>}>
          <NavDropdown.ItemText>Your cart is empty</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <Container className="container-logo">
    <Row>
      <Col>
        <img src="/experience-islandsnow-bootstrap-logo.png" alt="logo" className="img-fluid rounded mx-auto d-block py-1"/>
      </Col>
    </Row>
  </Container>
);

const MiddleMenu = () => (
  <Container className="container-menu mt-5">
    <Row className="justify-content-center">
      {["MEN", "WOMEN", "KIDS", "BRANDS"].map((item) => (
        <Col xs={1} key={item}>
          <div className="dropdown">
            <div className="dropdown-toggle"><strong>{item}</strong></div>
          </div>
        </Col>
      ))}
      <Col xs={1}>
        <strong>SEARCH</strong>
      </Col>
    </Row>
  </Container>
);

const FullWidthImage = () => (
  <Row className="justify-content-center">
    <img src="/experience-islandsnow-bootstrap-main.png" alt="pic" className="img-fluid pt-3"/>
  </Row>
);

const FooterMenu = () => (
  <footer>
    <Container className="p-4">
      <Row>
        <Col>
          <strong>NAVIGATION</strong>
          <hr/>
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          <strong>MAIN MENU</strong>
          <hr/>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          <strong>CONNECT</strong>
          <hr/>
          <div>Sign up for latest updates</div>
          <div>
            <input type="text" placeholder="Enter Email Address"/>
            <button className="btn btn-dark">Join</button>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default function Home() {
  return (
    <main>
      <TopMenu/>
      <IslandSnowLogo/>
      <MiddleMenu/>
      <FullWidthImage/>
      <FooterMenu/>
    </main>
  );
}