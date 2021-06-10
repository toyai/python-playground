<template>
  <button
    @click.prevent="embedCode"
    class="*header-btn"
    title="Embed the code"
    v-if="inSameWindow"
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
        d="M31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7z"
        fill="currentColor"
      ></path>
      <path
        d="M1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7z"
        fill="currentColor"
      ></path>
      <path
        d="M12.419 25.484L17.639 6l1.932.518L14.35 26z"
        fill="currentColor"
      ></path>
    </svg>
    <span class="sr-only">Embed Code</span>
  </button>
</template>

<script>
export default {
  setup() {
    const inSameWindow = parent.location === location
    const question = 'What is the title for this embeddable snippet?'
    const accessibility =
      'This could help for people navigating with assistive technology such as a screen reader.'

    const embedCode = async () => {
      const title = prompt(`${question}\n\n${accessibility}`)
      const id = title.split(' ').join('-').toLowerCase()
      const iframeCode = `<iframe
  src="${location.href}"
  loading="lazy"
  allow="fullscreen"
  id="p-embed-${id}"
  class="p-embed-iframe"
  name="p-embed-${id}"
  width="100%"
  height="500"
  style="border: 1px solid #ddd;"
  title="${title}"
></iframe>`

      try {
        await navigator.clipboard.writeText(iframeCode)
        alert('Embeddable code has been copied to the clipboard.')
      } catch (e) {
        console.error(e)
      }
    }
    return { embedCode, inSameWindow }
  }
}
</script>
