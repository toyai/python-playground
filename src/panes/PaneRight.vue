<template>
  <button class="*file-tab-btn">Result</button>
  <div class="cursor-text font-mono p-4 border-t">
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
