import React from 'react';
import { Navbar } from 'react-bootstrap';

const PopularTitle = ({title}) => {
    return (
        <Navbar className="container-fluid text-white" bg="dark" expand="lg">
            <Navbar.Brand className="text-white" href="#"><h4>Popular {title}</h4></Navbar.Brand>
        </Navbar>
    );
};

export default PopularTitle;