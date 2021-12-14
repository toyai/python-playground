<script setup>
import { extensions } from './codemirror.js'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['change'])

const el = ref()

onMounted(() => {
  const view = new EditorView({
    parent: el.value,
    state: EditorState.create({
      extensions: [
        extensions,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            emit('change', update.state.doc.toString())
          }
        }),
      ],
    }),
  })

  watch(
    () => props.code,
    () => {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: props.code },
      })
    },
    { immediate: true },
  )
})
</script>

<template>
  <div class="h-full bg-light-400 w-full" ref="el"></div>
</template>
