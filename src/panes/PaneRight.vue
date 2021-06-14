<template>
  <div class="h-full w-full <md:w-screen">
    <button class="*file-tab-btn">Result</button>
    <div class="border-t font-mono p-4">
      <textarea
        name="playground result"
        class="border w-full py-1 px-2 focus:outline-none"
        v-model="store.result"
        readonly
        rows="8"
        placeholder="Click ▶ Run to see the result"
      >
      </textarea>
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
