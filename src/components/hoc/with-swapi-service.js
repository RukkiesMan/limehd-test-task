import React from 'react';
import { SwapiServiceConsumer } from '../../contexts/swapi-context';

const withSwapiService = () => Wrapped => props => (
  <SwapiServiceConsumer>
    {swapiService => <Wrapped {...props} swapiService={swapiService} />}
  </SwapiServiceConsumer>
);

export default withSwapiService;
