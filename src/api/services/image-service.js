import defaultImage from '../../assets/images/default-image.png';

export default class ImageService {
  baseURL = 'https://starwars-visualguide.com/assets/img/';

  getStarshipImage = id => `${this.baseURL}/starships/${id}.jpg`;

  getDefaultStarshipImage = () => defaultImage;
}
