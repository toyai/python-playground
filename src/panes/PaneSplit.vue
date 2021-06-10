<template>
  <div
    ref="container"
    class="flex h-[calc(100vh_-_50px)]"
    :class="{ 'cursor-ew-resize': isDragging }"
    @mousemove="onDragging"
    @mouseup="stopDragging"
    @mouseleave="stopDragging"
  >
    <div
      class="border-r border-solid border-gray-300 relative"
      :class="{ 'pointer-events-none': isDragging }"
      :style="{ width: getWidth() + '%' }"
    >
      <slot name="left" />
      <div
        class="cursor-ew-resize top-0 -right-5px bottom-0 w-10px z-99 absolute"
        @mousedown.prevent="startDragging"
      />
    </div>
    <div
      class="relative"
      :class="{ 'pointer-events-none': isDragging }"
      :style="{ width: 100 - getWidth() + '%' }"
    >
      <slot name="right" />
    </div>
  </div>
  <PaneSwitch />
</template>

<script>
import { ref } from 'vue'
import PaneSwitch from './PaneSwitch.vue'

export default {
  components: { PaneSwitch },
  setup() {
    const width = ref(60)
    const isDragging = ref(false)
    const container = ref()

    const onDragging = (e) => {
      if (isDragging.value) {
        const draggingPosition = e.pageX
        const totalSize = container.value.offsetWidth
        width.value = (draggingPosition / totalSize) * 100
      }
    }
    const startDragging = () => {
      isDragging.value = true
    }
    const stopDragging = () => {
      isDragging.value = false
    }
    const getWidth = () => {
      return width.value < 20 ? 20 : width.value > 80 ? 80 : width.value
    }

    return {
      width,
      getWidth,
      container,
      isDragging,
      onDragging,
      startDragging,
      stopDragging
    }
  }
}
</script>
