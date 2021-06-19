<template>
  <header class="border-b flex h-50px px-4 items-center justify-between">
    <div>
      <img
        class="h-30px mr-1 w-30px inline-block"
        src="../assets/logo.svg"
        alt="Python Logo"
        data-test="logo"
      />
      <span
        class="mr-1 text-xl align-middle <sm:hidden"
        data-test="playgroundText"
        >The Python Playground</span
      >
      <span
        class="text-sm align-middle <sm:hidden"
        title="Python Version used to run the code"
        data-test="pyVer"
        >(v{{ pyVer }})</span
      >
    </div>
    <div class="text-sm inline-flex items-center content-center">
      <Commit />
      <Download />
      <EmbedCode />
      <Share />
      <Run />
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
  components: { Commit, Download, EmbedCode, Run, Share },
  setup() {
    const pyVer = __PY_VER__
    return { pyVer }
  }
}
</script>
