<template>
  <a
    :href="playgroundURL"
    class="mx-1"
    target="_blank"
    rel="noopener noreferrer"
    title="Edit the code on Playground"
    v-if="!inSameWindow"
  >
    Edit on Playground
  </a>
</template>

<script>
import { playgroundURL, inSameWindow } from './utils.js'
export default {
  setup() {
    return { playgroundURL, inSameWindow }
  }
}
</script>
