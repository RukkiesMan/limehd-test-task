import React from 'react';

import ScreenLayoutMain from '../layouts/main';
import StarshipList from '../../starship/list';

const HomeScreen = () => {
  return (
    <ScreenLayoutMain>
      <StarshipList />
    </ScreenLayoutMain>
  );
};

export default HomeScreen;
