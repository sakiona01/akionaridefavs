import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useUser } from './hooks/useUser'

const NavBar = () => {
const { user, setUser } = useUser()

const navigate = useHistory()
    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                setUser({})
                navigate.push("/login")
            }
        })
    }
    
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
                    {/* <Nav.Link href="/favorites">View Favorites</Nav.Link> */}
                </Nav>
                <Nav>
                    <NavDropdown title="" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/login">
                        Login
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}> 
                        Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                        Sign-up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    </NavDropdown>
                    <Navbar.Text>
                        Signed in as: <a href="/ridecollection">{user?.username ? `${user?.username}` : "Not Signed In"}</a>
                    </Navbar.Text>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;