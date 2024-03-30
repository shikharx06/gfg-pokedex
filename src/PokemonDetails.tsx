import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Dashboard';
import { pokemonData } from './data';

const PokemonDetails = () => {
  // for js just do useParams();
  const params = useParams<{ id: string }>();

  const pokemon = pokemonData.results.find(
    (pokemon) => pokemon.name === params.id
  );

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return (
    <div>
      <Card pokemonName={pokemon?.name} pokemonDataUrl={pokemon.url} />
    </div>
  );
};

export default PokemonDetails;
