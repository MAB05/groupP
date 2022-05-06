import React from "react";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import './Header.css'


function Header() {

    let openW = () => {
        document.getElementById("modalW").style.display = "block"
    }

    let closeW = () => {
        document.getElementById("modalW").style.display = "none"
    }

    let openW1 = () => {
        document.getElementById("modalW1").style.display = "block"
    }

    let closeW1 = () => {
        document.getElementById("modalW1").style.display = "none"
    }


    return (
        <>
            <Navbar bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand href="#Brand" style={{ width: '8rem', color: 'crimson' }}>Drink Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#About">About</NavDropdown.Item>
                                <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#Other">Other</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#Help">Help</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Button className="m-2" onClick={openW} style={{ width: '5rem', background: 'crimson', border: 'white' }}>Register</Button>
                            <Button className="m-2" onClick={openW1} style={{ width: '5rem', background: 'crimson', border: 'white' }}>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

             <div class="modal" id="modalW" style={{ display: "none" }}>
                <div class="modalC"><Button onClick={closeW} class="btnW" /></div>
            </div>
            <div class="modal1" id="modalW1" style={{ display: "none" }}>
                <div class="modalC1"><Button onClick={closeW1} class="btnW1" /></div>
            </div> 
        </>
    );
}
export default Header;