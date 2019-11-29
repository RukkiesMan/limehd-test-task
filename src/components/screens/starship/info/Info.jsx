import React from 'react';

import StarshipInfo from '../../../starship/info';

const ScreenStarshipInfo = ({ match }) => {
  return (
    <div>
      <StarshipInfo starshipId={match.params.id} />
    </div>
  );
};

export default ScreenStarshipInfo;
