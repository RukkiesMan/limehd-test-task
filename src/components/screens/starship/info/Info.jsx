import React from 'react';

import ScreenLayoutMain from '../../layouts/main';
import StarshipInfo from '../../../starship/info';

const ScreenStarshipInfo = ({ match }) => {
  return (
    <ScreenLayoutMain>
      <StarshipInfo starshipId={match.params.id} />
    </ScreenLayoutMain>
  );
};

export default ScreenStarshipInfo;
