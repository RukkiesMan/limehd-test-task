import React from 'react';
import classNames from 'classnames';

import Image from 'react-image';

import withImageService from '../../hoc/with-image-service';

import Spinner from '../../spinner';

import './Image.scss';

const StarshipImage = ({ imageService, starshipId, size }) => {
  const imageURL = imageService.getStarshipImage(starshipId);
  const defaultImageURL = imageService.getDefaultStarshipImage();

  const containerClassName = classNames({
    'starship-image__container': true,
    'starship-image__container_lg': size === 'lg',
    'd-flex': true,
    'justify-content-center': true,
    'align-items-center': true,
  });

  return (
    <Image
      className="starship-image"
      src={[imageURL, defaultImageURL]}
      container={children => {
        return <div className={containerClassName}>{children}</div>;
      }}
      loader={<Spinner />}
    />
  );
};

export default withImageService()(StarshipImage);
