<template>
  <header class="border-b flex h-50px px-4 items-center justify-between">
    <div>
      <img
        class="h-30px mr-2 w-30px inline-block"
        src="../assets/logo.svg"
        alt="Python Logo"
        srcset=""
      />
      <span class="text-2xl inline-block align-middle <md:hidden"
        >The Python Playground</span
      >
    </div>
    <Run />
    <div class="text-sm inline-flex items-center content-center">
      <Commit />
      <Download />
      <EmbedCode />
      <Share />
    </div>
  </header>
</template>

<script>
import Commit from './Commit.vue'
import Download from './Download.vue'
import EmbedCode from './EmbedCode.vue'
import Run from './Run.vue'
import Share from './Share.vue'

export default {
  components: { Commit, Download, EmbedCode, Run, Share }
}
</script>
