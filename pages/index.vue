<template>
  <div class="container">
    <div class="pokemon-list">
      <pokemon-form
        :value.sync="state.party.one"
        :pokemonNames="pokemonNamesRef"
        :pokemons="pokemonsRef"
      />
      <pokemon-form
        :value.sync="state.party.two"
        :pokemonNames="pokemonNamesRef"
        :pokemons="pokemonsRef"
      />
      <pokemon-form
        :value.sync="state.party.three"
        :pokemonNames="pokemonNamesRef"
        :pokemons="pokemonsRef"
      />
      <pokemon-form
        :value.sync="state.party.four"
        :pokemonNames="pokemonNamesRef"
        :pokemons="pokemonsRef"
      />
      <pokemon-form
        :value.sync="state.party.five"
        :pokemonNames="pokemonNamesRef"
        :pokemons="pokemonsRef"
      />
      <pokemon-form
        :value.sync="state.party.six"
        :pokemonNames="pokemonNamesRef"
        :pokemons="pokemonsRef"
      />
    </div>
    <!-- <p v-for="_pokemonName in pokemonNamesRef">{{ _pokemonName }}</p> -->
    <!-- <div class="list">
      <div class="_item" v-if="_pokemon.image" v-for="_pokemon in pokemons">
        <p>{{ _pokemon.name }}</p>
        <img :src="_pokemon.image" alt="" />
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  ssrRef,
  reactive
} from "@nuxtjs/composition-api"
import PokemonForm from "~/components/PokemonForm.vue"
import VueSimpleSuggest from "~/components/VueSimpleSuggest.vue"
// import { firestore } from "~/plugins/firebase"
// import axios from "~/plugins/axios"
// import { Pokemon } from "~/interfaces"
import { getPokemons } from "~/composables"

export default defineComponent({
  components: { VueSimpleSuggest, PokemonForm },
  setup() {
    const state: {
      party: {
        one: string
        two: string
        three: string
        four: string
        five: string
        six: string
      }
    } = reactive({
      party: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: ""
      }
    })

    const { pokemonNamesRef, pokemonsRef } = getPokemons()

    return {
      state,
      pokemonNamesRef,
      pokemonsRef
    }
  }
})
</script>
