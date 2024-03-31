import { Await, useLoaderData } from 'react-router-dom';
import { PokemonList } from './subComponents/PokemonList';
import { Loader } from '../../components/loader';
import React from 'react';

const Dashboard = () => {
  // https://reactrouter.com/en/main/hooks/use-loader-data
  const pokemonData = useLoaderData();

  return (
    <React.Suspense fallback={<Loader />}>
      <Await
        resolve={pokemonData}
        errorElement={<div>Could not load pokemons 😬</div>}
        children={(resolvedPokemonData) => (
          <PokemonList pokemonData={resolvedPokemonData} />
        )}
      />
    </React.Suspense>
  );
};

export default Dashboard;
