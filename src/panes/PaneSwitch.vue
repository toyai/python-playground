<template>
  <div
    class="
      bg-white
      border-t
      flex
      h-50px
      text-center
      w-full
      py-1
      bottom-0
      md:hidden
      items-center
      justify-evenly
      fixed
    "
  >
    <template v-for="(s, i) in ['Code', 'Result']" :key="i">
      <button
        class="*pane-switch-btn"
        :class="{ 'bg-blue-500 text-light-400': activeSwitch === s }"
        @click.prevent="clickCodeResult(s)"
      >
        {{ s }}
      </button>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'PaneSwitch',
  emits: ['btnChange'],
  setup(_, ctx) {
    const activeSwitch = ref('Code')

    const clickCodeResult = (btn) => {
      activeSwitch.value = btn
      ctx.emit('btnChange', activeSwitch.value)
    }

    return { clickCodeResult, activeSwitch }
  }
}
</script>
