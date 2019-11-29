import React from 'react';
import { ImageServiceConsumer } from '../../contexts/image-context';

const withImageService = () => Wrapped => props => (
  <ImageServiceConsumer>
    {imageService => <Wrapped {...props} imageService={imageService} />}
  </ImageServiceConsumer>
);

export default withImageService;
