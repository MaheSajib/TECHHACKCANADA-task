import React from 'react';
import { Card } from 'react-bootstrap';

const SeriesCard = ({series}) => {
    return (
        <Card className="mx-2 my-2" style={{ width: '12rem' }}>
                <Card.Img variant="top" src={series.images['Poster Art'].url} />
                <Card.Body>
                    <Card.Title>{series.title}</Card.Title>
                </Card.Body>
        </Card>
    );
};

export default SeriesCard;