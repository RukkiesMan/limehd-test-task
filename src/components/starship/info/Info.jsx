import React, { useState, useEffect } from 'react';

import withSwapiService from '../../hoc/with-swapi-service';

import Spinner from '../../spinner';

const StarshipInfo = ({ swapiService, starshipId, ...props }) => {
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStarship = async id => {
      const { data } = await swapiService.getStarship(id);

      setStarship(data);
      setLoading(false);
    };
    getStarship(starshipId);
  }, [swapiService, starshipId]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div {...props}>
          <h2>Name: {starship.name}</h2>
          <p>Crew: {starship.crew}</p>
          <p>Model: {starship.model}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default withSwapiService()(StarshipInfo);
