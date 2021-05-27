<template>
  <div class="flex h-screen">
    <div
      class="relative"
      border="r-1 solid gray-300"
      :style="{ width: getWidth() + '%' }"
    >
      <slot name="left" />
      <div
        class="absolute -right-5px w-10px bottom-0 top-0 z-99 cursor-ew-resize"
      />
    </div>
    <div class="relative" :style="{ width: 100 - getWidth() + '%' }">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const width = ref(50)

    const getWidth = () => {
      return width.value < 20 ? 20 : width.value > 80 ? 80 : width.value
    }

    return { width, getWidth }
  }
}
</script>
