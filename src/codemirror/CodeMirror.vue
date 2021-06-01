<template>
  <div class="h-full w-full bg-light-400" ref="el"></div>
</template>

<script>
import { extensions } from './codemirror.js'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { onMounted, ref, toRefs, watchEffect } from 'vue'

export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs, slots, emit }) {
    const el = ref()
    const { code } = toRefs(props)

    onMounted(() => {
      const view = new EditorView({
        parent: el.value,
        state: EditorState.create({
          extensions: [
            ...extensions,
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                emit('change', update.state.doc.toString())
              }
            })
          ]
        })
      })

      watchEffect(() => {
        view.dispatch({
          changes: { from: 0, to: view.state.doc.length, insert: code.value }
        })
      })
    })

    return { el }
  }
}
</script>
