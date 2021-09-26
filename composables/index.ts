import { useAsync, ssrRef } from "@nuxtjs/composition-api"
import axios from "~/plugins/axios"
import { Pokemon } from "~/interfaces"

export const getPokemons = () => {
  const pokemonsRef = ssrRef<Pokemon[]>([])
  const pokemonNamesRef = ssrRef<string[]>([])

  useAsync(async () => {
    const res = await axios.get<{
      pokemons: Pokemon[]
    }>("/api/v1/data/v1")

    const pokemons = res.data.pokemons
    pokemonsRef.value = pokemons
    pokemonNamesRef.value = pokemons
      .map((_pokemon) => _pokemon.name)
      .filter((_pokemonName) => !/-\d/.test(_pokemonName))
  })

  return {
    pokemonsRef,
    pokemonNamesRef
  }
}
