import ApiBase from '../api-base';

export default class SwapiService extends ApiBase {
  constructor() {
    super('https://swapi.co/api/');
  }

  getStarships = () => this.get('/starships/');

  getStarship = id => this.get(`/starships/${id}`);
}
