export interface IPokemonBasic {
  name: string;
  url: string;
}

export interface IFetchPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonBasic[];
}

export interface IPokemonInfo {
  base_experience: number;
  weight: number;
  height: number;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
}
