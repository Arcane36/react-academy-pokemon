import React, { useEffect, useState } from "react";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import { Card } from "../../components/Card";
import { api } from "../../lib/api";
import { IPokemonBasic } from "../../types";
import { PokemonListStyled } from "./PokemonList.styled";

export const PokemonList: React.FC = () => {
  const [listOfPokemons, setListOfPokemons] = useState<IPokemonBasic[]>([]);
  const [nextFetchUrl, setNextFetchUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const result = await api.getPokemon();
      setListOfPokemons(result.data.results);
      setNextFetchUrl(result.data.next);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMorePokemons = async () => {
    try {
      setIsFetching(true);
      const result = await api.getMore(nextFetchUrl);
      const copy = [...listOfPokemons, ...result.data.results];

      setListOfPokemons(copy);
      setNextFetchUrl(result.data.next);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <PokemonListStyled>
        {listOfPokemons?.map((poke, index) => (
          <Card key={index} pokemonName={poke.name} />
        ))}
      </PokemonListStyled>

      <ButtonStyled onClick={fetchMorePokemons} disabled={isFetching ? true : false}>
        Načíst další Pokemony
      </ButtonStyled>
    </>
  );
};
