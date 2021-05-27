<template>
  <header class="flex items-center justify-between px-4 py-2 border-b">
    <div>
      <img
        class="w-30px h-30px inline-block mr-2"
        src="../assets/logo.png"
        alt=""
        srcset=""
      />
      <span class="text-2xl inline-block align-middle">The Python Playground</span>
    </div>
    <div>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-2"
      >
        v{{ version }}@{{ currentCommit }}
      </a>
      <button class="p-button" @click="downloadFile">Download</button>
      <button class="p-button" @click="shareFile">Share</button>
    </div>
  </header>
</template>

<script>
import { version } from '../../package.json'
export default {
  setup() {
    const currentCommit = __COMMIT__

    const downloadFile = () => {
      alert('download trigger')
    }
    const shareFile = async () => {
      try {
        await navigator.clipboard.writeText(location.href)
        alert('Shareable URL has been copied to clipboard.')
      } catch (e) {
        console.error(e)
      }
    }
    return { version, currentCommit, downloadFile, shareFile }
  }
}
</script>

<style scoped lang="postcss">
.p-button {
  @apply mx-2 focus:outline-none px-4 py-1 hover:(bg-blue-gray-200) bg-blue-gray-100 border rounded-lg;
}
</style>
