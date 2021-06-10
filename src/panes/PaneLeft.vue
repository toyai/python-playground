<template>
  <button class="*file-tab-btn">main.py</button>
  <div class="border-t h-[calc(100%_-_35px)] w-full">
    <CodeMirror v-if="code" @change="onChange" :code="code" />
    <div v-else class="mt-4 text-center">Loading Code...</div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import CodeMirror from '../codemirror/CodeMirror.vue'
import { store, setupCode } from '../store.js'

export default {
  components: { CodeMirror },
  setup() {
    const code = ref()

    const onChange = (updatedCode) => {
      store.files['main.py'] = updatedCode
    }

    onMounted(async () => {
      await setupCode()
      code.value = store.files['main.py']
    })

    return { onChange, code }
  }
}
</script>
