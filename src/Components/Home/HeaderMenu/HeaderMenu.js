import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';

const HeaderMenu = () => {
    return (
        <Navbar className="container-fluid text-white" bg="primary" expand="lg">
            <Navbar.Brand className="text-white" href="/"><h1>Movie World</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex ms-auto">
                    <Button className="m-2" variant="btn btn-success">Log in</Button>
                    <Button className="m-2" variant="btn btn-dark">Start your free trail</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderMenu;