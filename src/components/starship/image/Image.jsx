import React from 'react';

import Image from 'react-image';

import withImageService from '../../hoc/with-image-service';

import Spinner from '../../spinner';

import './Image.scss';

const StarshipImage = ({ imageService, starshipId, ...props }) => {
  const imageURL = imageService.getStarshipImage(starshipId);
  const defaultImageURL = imageService.getDefaultStarshipImage();

  return (
    <Image
      className="starship-image"
      src={[imageURL, defaultImageURL]}
      container={children => {
        return (
          <div className="starship-image__container d-flex justify-content-center align-items-center">
            {children}
          </div>
        );
      }}
      loader={<Spinner />}
      {...props}
    />
  );
};

export default withImageService()(StarshipImage);
