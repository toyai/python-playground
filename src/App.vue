<template>
  <div class="bg-white font-sans text-base text-blue-gray-600 antialiased">
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
import Header from './header/Header.vue'
import PaneSplit from './panes/PaneSplit.vue'
import PaneLeft from './panes/PaneLeft.vue'
import PaneRight from './panes/PaneRight.vue'
</script>
