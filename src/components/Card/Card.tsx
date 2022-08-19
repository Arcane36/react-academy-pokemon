import React, { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { IPokemonInfo } from "../../types";
import { CardImageStyled, CardStyled, CardTextStyled, CardTitleStyled } from "./CardStyled";

interface CardProps {
  pokemonName: string;
}

export const Card: React.FC<CardProps> = ({ pokemonName }) => {
  const [pokeDetail, setPokeDetail] = useState<IPokemonInfo>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemonByName(pokemonName);
  }, [pokemonName]);

  const fetchPokemonByName = async (name: string) => {
    try {
      const result = await api.getPokemonByName(name);
      setPokeDetail(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(function () {
        setIsLoading(false);
      }, 300);
    }
  };

  return (
    <CardStyled isLoading={isLoading}>
      <CardTitleStyled>{pokemonName}</CardTitleStyled>
      <CardImageStyled src={pokeDetail?.sprites.other.home.front_default} alt={pokemonName} />
      <CardTextStyled>
        <b>Experience:</b> {pokeDetail?.base_experience}
      </CardTextStyled>
      <CardTextStyled>
        <b>Weight:</b> {pokeDetail?.weight}
      </CardTextStyled>
      <CardTextStyled>
        <b>Height:</b> {pokeDetail?.height}
      </CardTextStyled>
      <CardTextStyled>
        <b>Types:</b>{" "}
        {pokeDetail?.types.map((type, index) => {
          return (index ? ", " : "") + type.type.name;
        })}
      </CardTextStyled>
    </CardStyled>
  );
};
