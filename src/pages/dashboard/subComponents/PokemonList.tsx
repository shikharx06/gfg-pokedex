import React, { useState } from 'react';
import { PokeCard } from './PokeCards';

type PokemonListData = {
  count: number;
  results: { name: string; url: string }[];
};

export const PokemonList = ({
  pokemonData,
}: {
  pokemonData: PokemonListData;
}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const matchingPokemons = (pokemonData as PokemonListData)?.results?.filter(
    (pokemon) =>
      searchValue
        ? pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        : true
  );

  return (
    <>
      <div className="w-full flex justify-center mt-12 text-3xl">
        <input
          type="search"
          className="border border-black p-4 rounded-lg"
          placeholder="Search pokemon.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="w-screen p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {matchingPokemons?.map((pokemon, i) => (
          <PokeCard
            key={i}
            pokemonName={pokemon.name}
            pokemonDataUrl={pokemon.url}
          />
        ))}
      </div>
    </>
  );
};
