<script setup>
async function shareURL() {
  try {
    await navigator.clipboard.writeText(location.href)
    alert('Shareable URL has been copied to the clipboard.')
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <button class="*header-btn" @click.prevent="shareURL" title="Share the code">
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
        d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.79 4.79 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.79 4.79 0 0 0 18 25a5 5 0 1 0 5-5zm0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3zM7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3z"
        fill="currentColor"
      ></path>
    </svg>
    <span class="sr-only" data-test="shareText">Share</span>
  </button>
</template>
