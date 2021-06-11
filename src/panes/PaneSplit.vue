<template>
  <div
    ref="container"
    class="flex h-[calc(100vh_-_50px)] w-full overflow-hidden"
    :class="{ 'cursor-ew-resize': isDragging }"
    @mousemove="onDragging"
    @mouseup="stopDragging"
    @mouseleave="stopDragging"
  >
    <div
      class="left relative mobile md:(border-r border-solid border-gray-300)"
      :class="{
        'pointer-events-none': isDragging,
        active: activeBtn === 'Code'
      }"
      :style="{ width: getWidth() + '%' }"
    >
      <PaneLeft />
      <div
        class="
          cursor-ew-resize
          top-0
          -right-5px
          bottom-0
          w-10px
          z-99
          absolute
          <md:hidden
        "
        @mousedown.prevent="startDragging"
      />
    </div>
    <div
      class="right relative mobile"
      :class="{
        'pointer-events-none': isDragging,
        active: activeBtn === 'Result'
      }"
      :style="{ width: 100 - getWidth() + '%' }"
    >
      <PaneRight />
    </div>
  </div>
  <PaneSwitch @btn-change="onBtnChange" />
</template>

<script>
import { ref } from 'vue'
import PaneLeft from './PaneLeft.vue'
import PaneRight from './PaneRight.vue'
import PaneSwitch from './PaneSwitch.vue'

export default {
  components: { PaneLeft, PaneRight, PaneSwitch },
  setup() {
    const width = ref(60)
    const isDragging = ref(false)
    const container = ref()
    const activeBtn = ref('Code')

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
    const onBtnChange = (btn) => {
      activeBtn.value = btn
    }

    return {
      activeBtn,
      width,
      getWidth,
      container,
      isDragging,
      onDragging,
      startDragging,
      stopDragging,
      onBtnChange
    }
  }
}
</script>

<style scoped lang="postcss">
.mobile {
  @apply <md:(transform transition-transform duration-250 !w-full);
}
.left,
.right.active {
  @apply <md:-translate-x-full;
}
.right,
.left.active {
  @apply <md:translate-x-0;
}
</style>
