<template>
  <a
    :href="`https://github.com/toyai/python-playground/commit/${currentCommit}`"
    target="_blank"
    rel="noopener noreferrer"
    class="mx-1"
    title="Current Playground Version"
    data-test="commit"
  >
    v{{ version }}@{{ currentCommit }}
  </a>
</template>

<script setup>
import { version } from '../../package.json'
const currentCommit = __COMMIT__.slice(0, 7)
</script>
