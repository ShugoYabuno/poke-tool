<template>
  <div class="container">
    <div>
      <div class="list">
        <template v-for="_pokemon in pokemons">
          <div class="_item" v-if="_pokemon.image">
            <p>{{ _pokemon.name }}</p>
            <img :src="_pokemon.image" alt="" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, ssrRef } from "@nuxtjs/composition-api"
import { firestore } from "~/plugins/firebase"
import axios from "~/plugins/axios"
import { Pokemon } from "~/interfaces"

export default defineComponent({
  setup() {
    const pokemons = ssrRef<Pokemon[]>([])
    useAsync(async () => {
      const res = await axios.get("/api/v1/data/v1")
      pokemons.value = res.data.pokemons
    })

    return {
      pokemons
    }
  }
})
</script>
