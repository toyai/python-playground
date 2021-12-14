<script setup>
import { ref } from 'vue'

const emit = defineEmits(['btnChange'])

const activeBtn = ref('Code')

function clickCodeResult(btn) {
  activeBtn.value = btn
  emit('btnChange', activeBtn.value)
}
</script>

<template>
  <div
    class="bg-white border-t flex h-50px w-full py-1 bottom-0 items-center justify-evenly fixed sm:hidden"
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
