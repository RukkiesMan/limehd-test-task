import axios from 'axios';

export default class ApiBase {
  constructor(baseURL) {
    const instance = axios.create({
      baseURL: baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    this.get = async path => instance.get(path);

    this.create = async (path, body) => instance.post(path, body);

    this.update = async (path, body) => instance.patch(path, body);

    this.remove = async path => instance.delete(path);
  }
}
