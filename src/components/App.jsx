import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { SwapiServiceProvider } from '../contexts/swapi-context';
import { ImageServiceProvider } from '../contexts/image-context';
import SwapiService from '../api/services/swapi-service';
import ImageService from '../api/services/image-service';

import ScreenRoot from './screens/Root';

const swapiService = new SwapiService();
const imageService = new ImageService();

const App = () => {
  return (
    <SwapiServiceProvider value={swapiService}>
      <ImageServiceProvider value={imageService}>
        <ScreenRoot />
      </ImageServiceProvider>
    </SwapiServiceProvider>
  );
};

export default App;
