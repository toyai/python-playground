<template>
  <button
    @click.prevent="downloadFile"
    class="*header-btn"
    title="Download the code"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      class="h-1.4em w-1.4em"
    >
      <path
        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4z"
        fill="currentColor"
      ></path>
      <path
        d="M26 14l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
        fill="currentColor"
      ></path>
    </svg>
    <span class="sr-only" data-test="downloadText">Download</span>
  </button>
</template>

<script>
import { store } from '../store'

export default {
  setup() {
    const downloadFile = () => {
      const blob = new Blob([store.files['main.py']], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const el = document.createElement('a')
      el.setAttribute('href', url)
      el.setAttribute('download', 'main.py')
      el.click()
      URL.revokeObjectURL(url)
    }

    return { downloadFile }
  }
}
</script>
