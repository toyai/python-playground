<script setup>
import { onMounted, ref } from 'vue'
import CodeMirror from '../codemirror/CodeMirror.vue'
import { store, setupCode } from '../store.js'

function onChange(updatedCode) {
  store.files['main.py'] = updatedCode
}

const code = ref()

onMounted(async () => {
  await setupCode()
  code.value = store.files['main.py']
})
</script>

<template>
  <div class="h-full w-full <sm:w-screen">
    <div class="*file-tab-btn" data-test="mainPy">main.py</div>
    <div class="border-t h-[calc(100%_-_32px)] w-full">
      <CodeMirror v-if="code" @change="onChange" :code="code" />
      <div v-else class="mt-4 text-center" data-test="loadingStatus">
        Loading Code...
      </div>
    </div>
  </div>
</template>
