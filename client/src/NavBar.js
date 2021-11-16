import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({ currentUser }) => {
    
  return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Akiona Ride Favs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/ridecollection">Ride Collection</Nav.Link>
                    <Nav.Link href="/addride">Add Ride</Nav.Link>
                    <Nav.Link href="/favorites">View Favorites</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/login">
                        Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/logout">
                        Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                        Sign-up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    </NavDropdown>
                    <Navbar.Text>
                        Signed in as: <a href="/ridecollection">{currentUser ? `${currentUser.username}` : "Not Signed In"}</a>
                    </Navbar.Text>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;