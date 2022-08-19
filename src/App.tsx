import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { HeaderStyled } from "./components/Header";
import { PokemonList } from "./pages/PokemonList";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <HeaderStyled
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="header"
      />

      <PokemonList />
    </>
  );
};
