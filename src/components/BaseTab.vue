
<template>
  <TabPanel :class="[tabPanelContainer, 'focus:outline-none']">
    <slot />
  </TabPanel>
</template>

<script setup lang="ts">
import { TabPanel } from '@headlessui/vue'
const props = defineProps({
  title: {
    type: [String, Number],
    default: 'Tab',
  },
  count: {
    type: [String, Number],
    default: '',
  },
  countVariant: {
    type: [String, Number],
    default: '',
  },
  tabPanelContainer: {
    type: String,
    default: 'py-4 mt-px',
  },
})

</script>