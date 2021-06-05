<template>
  <span v-if="!code">Loading Code...</span>
  <CodeMirror @change="onChange" :code="code" />
</template>

<script>
import { ref } from 'vue'
import CodeMirror from '../codemirror/CodeMirror.vue'
import { store } from '../store.js'

export default {
  components: { CodeMirror },
  setup() {
    const onChange = (updatedCode) => {
      store.files['main.py'] = updatedCode
    }
    let code
    if (store.files['main.py']) {
      code = store.files['main.py']
    }

    return { onChange, code }
  }
}
</script>
