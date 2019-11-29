import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';

import withSwapiService from '../../hoc/with-swapi-service';

import StarshipItem from '../item';

const StarshipList = ({ swapiService, ...props }) => {
  const [starships, setStarships] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStarships = async () => {
      const {
        data: { results },
      } = await swapiService.getStarships();

      setStarships(results);
      setLoading(false);
    };
    getStarships();
  }, [swapiService]);

  return (
    <React.Fragment>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Row {...props}>
          {starships.map(starship => (
            <Col className="my-2" xs={12} sm={6} key={starship.name}>
              <StarshipItem starship={starship} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default withSwapiService()(StarshipList);
