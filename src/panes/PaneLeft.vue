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
      store.code = updatedCode
    }
    const code = store.code

    return { onChange, code }
  }
}
</script>
