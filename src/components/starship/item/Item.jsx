import React from 'react';

import { Card } from 'react-bootstrap';

import StarshipImage from '../image';

const StarshipItem = ({ starship, ...props }) => {
  return (
    <Card {...props}>
      <StarshipImage starshipId={starship.id} />
      <Card.Body>
        <Card.Title>{starship.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StarshipItem;
