<template>
  <div class="antialiased font-sans text-blue-gray-600">
    <Header />
    <PaneSplit>
      <template #left>
        <PaneLeft />
      </template>
      <template #right>
        <PaneRight />
      </template>
    </PaneSplit>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import PaneSplit from './components/PaneSplit.vue'
import PaneLeft from './components/PaneLeft.vue'
import PaneRight from './components/PaneRight.vue'
</script>
