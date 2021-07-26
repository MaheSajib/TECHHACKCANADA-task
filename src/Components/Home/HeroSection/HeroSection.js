import React from 'react';
import { Card } from 'react-bootstrap';
import './HeroSection.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="container d-flex flex-wrap my-5">
            <Link className="text-decoration-none" to="/series">
                <Card className="mx-5" style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="/images/r.jpg" />
                    <Card.Body>
                        <Card.Title>Popular Series</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
            <Link className="text-decoration-none" to="/movie">
                <Card className="mx-5" style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="/images/r.jpg" />
                    <Card.Body>
                        <Card.Title>Popular Movies</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default HeroSection;