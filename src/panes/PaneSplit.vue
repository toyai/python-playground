<script setup>
import { ref } from 'vue'
import PaneLeft from './PaneLeft.vue'
import PaneRight from './PaneRight.vue'
import PaneSwitch from './PaneSwitch.vue'

const width = ref(50)
const isDragging = ref(false)
const container = ref()
const activeBtn = ref('Code')

function onDragging(e) {
  if (isDragging.value) {
    const draggingPosition = e.pageX
    const totalSize = container.value.offsetWidth
    width.value = (draggingPosition / totalSize) * 100
  }
}
function startDragging() {
  isDragging.value = true
}
function stopDragging() {
  isDragging.value = false
}
function getWidth() {
  return width.value < 20 ? 20 : width.value > 80 ? 80 : width.value
}
function onBtnChange(btn) {
  activeBtn.value = btn
}
</script>

<template>
  <div
    ref="container"
    tabindex="0"
    class="flex h-[calc(100vh_-_50px)] overflow-hidden"
    :class="{ 'cursor-ew-resize': isDragging }"
    @mousemove="onDragging"
    @mouseup="stopDragging"
    @mouseleave="stopDragging"
  >
    <div
      class="
        relative
        sm:(border-r
        border-solid border-gray-300)
        <sm:(transform
        transition-transform
        duration-250
        translate-x-0
        !w-full)
      "
      :class="{
        'pointer-events-none': isDragging,
        '<sm:-translate-x-full': activeBtn === 'Result'
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
          <sm:hidden
        "
        @mousedown.prevent="startDragging"
      />
    </div>
    <div
      class="
        relative
        <sm:(transform
        transition-transform
        duration-250
        translate-x-0
        !w-full)
      "
      :class="{
        'pointer-events-none': isDragging,
        '<sm:-translate-x-full': activeBtn === 'Result'
      }"
      :style="{ width: 100 - getWidth() + '%' }"
    >
      <PaneRight />
    </div>
  </div>
  <PaneSwitch @btn-change="onBtnChange" />
</template>
