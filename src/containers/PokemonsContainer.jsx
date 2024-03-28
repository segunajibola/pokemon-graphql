import React from "react";
import { useQuery } from "@apollo/client";
import { Pokemon } from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export function PokemonsContainer() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons = data?.pokemons || [];

  console.log("pokemans", pokemons);

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}
