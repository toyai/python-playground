<template>
  <div class="cursor-text font-mono h-full w-full p-4">
    <span class="result">
      {{ store.result }}
    </span>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  setup() {
    return { store }
  }
}
</script>

<style scoped>
.result::before {
  content: '>>> ';
}
</style>
