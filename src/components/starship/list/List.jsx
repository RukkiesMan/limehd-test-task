import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Pagination from 'react-js-pagination';

import withSwapiService from '../../hoc/with-swapi-service';

import StarshipItem from '../item';
import Spinner from '../../spinner';

const StarshipList = ({ swapiService, ...props }) => {
  const [activePage, setActivePage] = useState(1);
  const [starships, setStarships] = useState(null);
  const [starshipCount, setStarshipCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const handlePageChange = async page => {
    setLoading(true);
    const { starships: fetchedStarships } = await swapiService.getStarships(
      page,
    );
    setStarships(fetchedStarships);

    setLoading(false);
    setActivePage(page);
  };

  useEffect(() => {
    const getStarships = async () => {
      const {
        starships: fetchedStarships,
        starshipCount: fetchedStarshipCount,
      } = await swapiService.getStarships();

      setStarships(fetchedStarships);
      setStarshipCount(fetchedStarshipCount);
      setLoading(false);
    };
    getStarships();
  }, [swapiService]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Row {...props}>
            {starships.map((starship, index) => (
              <LinkContainer
                to={`/starships/${starship.id}`}
                key={starship.id}
                tabIndex={1}
              >
                <Col className="my-2" xs={12} sm={6}>
                  <StarshipItem starship={starship} />
                </Col>
              </LinkContainer>
            ))}
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={starshipCount}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
                tabIndex={10}
              />
            </Col>
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default withSwapiService()(StarshipList);
