<template>
  <div class="pokemon-form">
    <vue-simple-suggest
      :value.sync="state.pokemonName"
      :list="pokemonNames"
      placeholder="名前を入力"
      class="pokemon-name-form"
    />
    <img v-if="state.pokemonImage" :src="state.pokemonImage" alt="" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  reactive,
  PropType
} from "@nuxtjs/composition-api"
import { Pokemon } from "~/interfaces"

export default defineComponent({
  props: {
    pokemonNames: {
      type: Array,
      required: true
    },
    pokemons: {
      type: Array as PropType<Pokemon[]>,
      required: true
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      pokemonName: "",
      pokemonImage: "",
      pokemon: null
    })

    console.log(props.pokemons)

    watch(
      () => state.pokemonName,
      (_value) => {
        const pokemon = props.pokemons.find((_pokemon) => {
          return _pokemon.name === _value
        })
        if (pokemon) {
          state.pokemonImage = pokemon.image
        }
      }
    )

    return {
      state
    }
  }
})
</script>
