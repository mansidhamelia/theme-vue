
<template>
  <TabPanel :class="[tabPanelContainer, 'focus:outline-none']">
    <!-- focus:ring-1 focus:ring-jet focus:ring-opacity-60 -->
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

<!-- <template>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
     Use an "onChange" listener to redirect the user to the selected tab URL. 
    <select id="tabs" name="tabs"
      class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
      <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
          :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
          :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
      </nav>
    </div>
  </div>
</template> -->
