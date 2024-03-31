import { useParams } from 'react-router-dom';
import { pokemonData } from '../../data';
import { PokeCard } from '../dashboard/subComponents/PokeCards';

const PokemonDetails = () => {
  // for js just do useParams();
  const params = useParams<{ id: string }>();

  const pokemon = pokemonData.results.find(
    (pokemon) => pokemon.name === params.id
  );

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return <PokeCard pokemonName={pokemon?.name} pokemonDataUrl={pokemon.url} />;
};

export default PokemonDetails;
