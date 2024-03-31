type PokemonCardProps = {
  pokemonName: string;
  pokemonDescription?: string;
  pokemonImage?: string;
  pokemonDataUrl?: string;
};

export const PokeCard = (props: PokemonCardProps) => {
  const { pokemonName, pokemonDescription, pokemonImage } = props;
  return (
    <a href={`/pokemon/${pokemonName}`} className="text-3xl capitalize">
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
          {pokemonName}
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {pokemonDescription}
          </p>
          <a
            href="#"
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          ></a>
        </div>
      </div>
    </a>
  );
};
