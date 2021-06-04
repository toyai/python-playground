<template>
  <div class="h-full bg-light-400 w-full" ref="el"></div>
</template>

<script>
import { extensions } from './codemirror.js'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { onMounted, ref, watchEffect } from 'vue'

export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    const el = ref()

    onMounted(() => {
      const view = new EditorView({
        parent: el.value,
        state: EditorState.create({
          extensions: [
            extensions,
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                ctx.emit('change', update.state.doc.toString())
              }
            })
          ]
        })
      })

      watchEffect(() => {
        view.dispatch({
          changes: { from: 0, to: view.state.doc.length, insert: props.code }
        })
      })
    })

    return { el }
  }
}
</script>
