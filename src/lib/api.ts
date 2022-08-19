import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const api = {
  getPokemon: () => axios.get("/"),
  getMore: (url: string) => axios.get(url),
  getPokemonByName: (name: string) => axios.get(`/${name}`),
};
