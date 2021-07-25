import React from 'react';
import { Card } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="d-flex container my-5">
            <Card className="mx-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/r.jpg" />
                <Card.Body>
                    <Card.Title>Popular Series</Card.Title>
                </Card.Body>
            </Card>
            <Card className="mx-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/r.jpg" />
                <Card.Body>
                    <Card.Title>Popular Movies</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HeroSection;