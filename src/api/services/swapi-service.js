import ApiBase from '../api-base';

export default class SwapiService extends ApiBase {
  constructor() {
    super('https://swapi.co/api/');
  }

  getStarships = () => this.get('/starships/');

  getStarship = id => this.get(`/starships/${id}`);

  extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    const [, id] = item.url.match(idRegExp);
    return id;
  };

  transformStarship = starship => {
    const {
      name,
      model,
      manufacturer,
      cost_in_credits: costInCredits,
    } = starship;

    return {
      id: this.extractId(starship),
      name,
      model,
      manufacturer,
      costInCredits,
    };
  };
}
