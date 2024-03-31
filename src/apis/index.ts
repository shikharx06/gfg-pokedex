import { Axios } from 'axios';

const api = new Axios({
  baseURL: 'https://pokeapi.co/api/v2/',
  //   headers: ""
});

export { api };
// axios.get('url here').then().catch()
