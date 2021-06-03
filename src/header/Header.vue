<template>
  <header class="flex items-center justify-between px-4 py-2 border-b h-14">
    <div>
      <img
        class="w-30px h-30px inline-block mr-2"
        src="../assets/logo.svg"
        alt="Python Logo"
        srcset=""
      />
      <span class="text-2xl inline-block align-middle <md:hidden"
        >The Python Playground</span
      >
    </div>
    <div class="inline-flex items-center content-center">
      <Commit />
      <Download />
      <EmbedCode />
      <Share />
      <GitHub />
    </div>
  </header>
</template>

<script>
import Commit from './Commit.vue'
import Download from './Download.vue'
import EmbedCode from './EmbedCode.vue'
import GitHub from './GitHub.vue'
import Share from './Share.vue'

export default {
  components: { Commit, Download, EmbedCode, GitHub, Share }
}
</script>
