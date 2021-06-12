<template>
  <div class="h-full w-screen">
    <button class="*file-tab-btn">Result</button>
    <div class="border-t cursor-text font-mono p-4">
      <span class="result">
        {{ store.result }}
      </span>
    </div>
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
