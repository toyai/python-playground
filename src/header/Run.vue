<template>
  <button
    class="
      border
      rounded
      bg-gray-50
      mr-0
      py-1
      px-2
      text-teal-500
      *header-btn
      hover:bg-gray-100
    "
    title="Run the code"
    @click="runCode"
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
      class="h-5 w-5"
    >
      <path
        d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28z"
        fill="currentColor"
      ></path>
    </svg>
    <span class="mx-2">Run</span>
  </button>
</template>

<script>
import { store } from '../store'

export default {
  setup() {
    const runCode = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/v0/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
            Accept: 'text/plain'
          },
          body: store.files['main.py'],
          referrerPolicy: 'no-referrer'
        })
        store.result = await res.text()
      } catch (e) {
        console.error(e)
      }
    }
    return { runCode }
  }
}
</script>
