import React from 'react';

import { Card } from 'react-bootstrap';

const StarshipItem = ({ starship, ...props }) => {
  return (
    <Card {...props}>
      <Card.Body>
        <Card.Title>{starship.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StarshipItem;
