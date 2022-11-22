import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Topbar = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">VITTORIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100vh" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/basket">Basket</Nav.Link>
              {/*<NavDropdown title="Basket" id="navbarScrollingDropdown">*/}
              {/*    <NavDropdown.Item href="#action3">Basket</NavDropdown.Item>*/}
              {/*    <NavDropdown.Item href="#action4">*/}
              {/*        Another action*/}
              {/*    </NavDropdown.Item>*/}
              {/*    <NavDropdown.Divider />*/}
              {/*    <NavDropdown.Item href="#action5">*/}
              {/*        Something else here*/}
              {/*    </NavDropdown.Item>*/}
              {/*</NavDropdown>*/}
            </Nav>
            {/*<Button variant="primary" className="me-2">*/}
            {/*    Log In*/}
            {/*</Button>*/}
            {/*<Button variant="primary">Log Out</Button>*/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Topbar;
