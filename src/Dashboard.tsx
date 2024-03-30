import React, { useState } from 'react';
import { pokemonData } from './data';

type PokemonCardProps = {
  pokemonName: string;
  pokemonDescription?: string;
  pokemonImage?: string;
  pokemonDataUrl?: string;
};

export const Card = (props: PokemonCardProps) => {
  const { pokemonName, pokemonDataUrl, pokemonDescription, pokemonImage } =
    props;
  return (
    <div className="">
      <div className="max-w-sm hover:bg-blue-400 hover:text-white shadow-lg  p-6 bg-white border border-gray-200 rounded-lg ">
        <div className="mb-4 hidden">
          <img
            src={pokemonImage}
            alt="pokemon img"
            style={{
              display: pokemonImage ? 'flex' : 'none',
            }}
          />
        </div>

        <div>
          <a href={`/pokemon/${pokemonName}`} className="text-3xl capitalize">
            {pokemonName}
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {pokemonDescription}
          </p>
          <a
            href="#"
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          ></a>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState<any>();

  const matchingPokemons = pokemonData.results.filter((pokemon) =>
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
        {matchingPokemons.map((pokemon, i) => (
          <Card
            key={i}
            pokemonName={pokemon.name}
            pokemonDataUrl={pokemon.url}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
