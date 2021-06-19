<template>
  <div class="h-full w-full <md:w-screen">
    <div class="*file-tab-btn" data-test="resultBtn">Result</div>
    <div class="border-t font-mono p-4">
      <label for="result" data-test="result"
        >Click ▶ Run to see the result:</label
      >
      <textarea
        id="result"
        name="playground result"
        class="border mt-1 w-full py-1 px-2"
        v-model="store.result"
        readonly
        rows="12"
      />
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
