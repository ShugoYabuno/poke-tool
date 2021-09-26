<template>
  <vue-simple-suggest
    :placeholder="placeholder"
    :list="list"
    :filter-by-query="true"
    v-model="pokemonName"
  ></vue-simple-suggest>
</template>

<script lang="ts">
import { defineComponent, ssrRef, watch } from "@nuxtjs/composition-api"
import VueSimpleSuggest from "vue-simple-suggest"
import "vue-simple-suggest/dist/styles.css"

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  components: {
    VueSimpleSuggest
  },
  setup(props, { emit }) {
    const pokemonName = ssrRef("")

    watch(
      () => pokemonName.value,
      (_value) => {
        emit("update:value", _value)
        emit("input")
      }
    )

    return {
      pokemonName
    }
  }
})
</script>
