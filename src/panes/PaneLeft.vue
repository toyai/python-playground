<template>
  <CodeMirror @change="onChange" :code="code" />
</template>

<script>
import CodeMirror from '../codemirror/CodeMirror.vue'
import { store } from '../store.js'

export default {
  components: { CodeMirror },
  setup() {
    const onChange = (updatedCode) => {
      store.files['main.py'] = updatedCode
    }
    const code = store.files['main.py']

    return { onChange, code }
  }
}
</script>
