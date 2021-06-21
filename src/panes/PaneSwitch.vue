<template>
  <div
    class="
      bg-white
      border-t
      flex
      h-50px
      w-full
      py-1
      bottom-0
      sm:hidden
      items-center
      justify-evenly
      fixed
    "
  >
    <template v-for="(btn, i) in ['Code', 'Result']" :key="i">
      <button
        class="*pane-switch-btn"
        :class="{ 'bg-blue-600 text-white': activeBtn === btn }"
        @click.prevent="clickCodeResult(btn)"
        :data-test="'switchBtn' + btn"
      >
        {{ btn }}
      </button>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['btnChange'],
  setup(_, ctx) {
    const activeBtn = ref('Code')

    const clickCodeResult = (btn) => {
      activeBtn.value = btn
      ctx.emit('btnChange', activeBtn.value)
    }

    return { clickCodeResult, activeBtn }
  }
}
</script>
