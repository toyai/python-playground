<template>
  <div class="h-full w-full overflow-scroll bg-light-400" ref="el"></div>
</template>

<script>
import './codemirror.css'
import { extensions } from './codemirror.js'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const el = ref()

    onMounted(() => {
      let state = EditorState.create({
        doc: `print('Hello World!')`,
        extensions: extensions
      })

      let view = new EditorView({
        state: state,
        parent: el.value
      })
    })

    return { el }
  }
}
</script>
