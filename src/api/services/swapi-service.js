import ApiBase from '../api-base';

export default class SwapiService extends ApiBase {
  constructor() {
    super('https://swapi.co/api/');
  }

  getStarships = async () => {
    const res = await this.get('/starships/');
    return res.data.results.map(this.transformStarship);
  };

  getStarship = async id => {
    const res = await this.get(`/starships/${id}`);
    return this.transformStarship(res.data);
  };

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
