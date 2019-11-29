import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';

import withSwapiService from '../../hoc/with-swapi-service';

import StarshipImage from '../image';
import Spinner from '../../spinner';

const StarshipInfo = ({ swapiService, starshipId }) => {
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStarship = async id => {
      const fetchedStarship = await swapiService.getStarship(id);

      setStarship(fetchedStarship);
      setLoading(false);
    };
    getStarship(starshipId);
  }, [swapiService, starshipId]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          <Col xs={12} lg={4}>
            <StarshipImage starshipId={starshipId} size="lg" />
          </Col>
          <Col xs={12} lg={8}>
            <h1 className="h3">{starship.name}</h1>
            <ul>
              <li>
                <span className="font-weight-bold">Model</span>:{' '}
                {starship.model || 'unknown'}
              </li>
              <li>
                <span className="font-weight-bold">Cost in credits</span>:{' '}
                {starship.costInCredits || 'unknown'}
              </li>
              <li>
                <span className="font-weight-bold">Manufacturer</span>:{' '}
                {starship.manufacturer || 'unknown'}
              </li>
            </ul>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default withSwapiService()(StarshipInfo);
