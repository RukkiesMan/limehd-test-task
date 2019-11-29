import React from 'react';

import { Card } from 'react-bootstrap';

import StarshipImage from '../image';

import './Item.scss';

const StarshipItem = ({ starship }) => {
  return (
    <Card className="starship-item h-100">
      <StarshipImage starshipId={starship.id} />
      <Card.Body>
        <Card.Title>{starship.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StarshipItem;
