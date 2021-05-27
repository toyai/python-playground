<template>
  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    class="mx-2"
  >
    v{{ version }}@{{ currentCommit }}
  </a>
</template>

<script>
import { version } from '../../package.json'

export default {
  setup() {
    const currentCommit = __COMMIT__.slice(0, 7)

    return { version, currentCommit }
  }
}
</script>
