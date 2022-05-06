import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container className="m-1" style={{display:"list-item"}}>
                <p>87474532268</p>
                <p>drinkS@gmail.com</p>
            </Container>
        </Navbar>
    );
}