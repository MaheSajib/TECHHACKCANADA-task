import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({movie}) => {
    return (
        <Card className="mx-2 my-2" style={{ width: '12rem' }}>
                <Card.Img variant="top" src={movie.images['Poster Art'].url} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
        </Card>
    );
};

export default MovieCard;