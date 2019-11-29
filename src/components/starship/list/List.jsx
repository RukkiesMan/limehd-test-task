import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import withSwapiService from '../../hoc/with-swapi-service';

import StarshipItem from '../item';
import Spinner from '../../spinner';

const StarshipList = ({ swapiService, ...props }) => {
  const [starships, setStarships] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStarships = async () => {
      const fetchedStarships = await swapiService.getStarships();

      setStarships(fetchedStarships);
      setLoading(false);
    };
    getStarships();
  }, [swapiService]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Row {...props}>
          {starships.map(starship => (
            <LinkContainer to={`/starships/${starship.id}`} key={starship.id}>
              <Col className="my-2" xs={12} sm={6}>
                <StarshipItem starship={starship} />
              </Col>
            </LinkContainer>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default withSwapiService()(StarshipList);
