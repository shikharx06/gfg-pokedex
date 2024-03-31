import { api } from '.';

export const fetchPokemons = async () => {
  try {
    const response = await api.get('/pokemon?limit=100000&offset=0');
    if (response.data) {
      const jsonData = JSON.parse(response.data);
      return { count: jsonData.count, results: jsonData.results };
    }
  } catch (err) {
    console.error(err);
    // throw err
  }
};
