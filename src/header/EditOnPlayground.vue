<template>
  <a
    :href="playgroundURL"
    target="_blank"
    rel="noopener noreferrer"
    title="Edit the code on Playground"
    v-if="!inSameWindow"
    class="focus:outline-none mx-1 inline-flex items-center content-center"
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
      class="w-6 h-6"
    >
      <path d="M2 26h28v2H2z" fill="currentColor"></path>
      <path
        d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"
        fill="currentColor"
      ></path>
    </svg>
    <span class="sr-only">Edit on Playground</span>
  </a>
</template>

<script>
import { playgroundURL, inSameWindow } from './utils.js'
export default {
  setup() {
    return { playgroundURL, inSameWindow }
  }
}
</script>
