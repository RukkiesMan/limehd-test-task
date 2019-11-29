import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { SwapiServiceProvider } from '../contexts/swapi-context';
import SwapiService from '../api/services/swapi-service';

import ScreenRoot from './screens/Root';

const swapiService = new SwapiService();

const App = () => {
  return (
    <SwapiServiceProvider value={swapiService}>
      <ScreenRoot />
    </SwapiServiceProvider>
  );
};

export default App;
