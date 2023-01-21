
<template>
    <div>
        <TabGroup :default-index="defaultIndex" @change="onChange">
            <TabList :class="[
                'flex border-b border-grey-light',
                'relative overflow-x-auto overflow-y-hidden',
                'lg:pb-0 lg:ml-0',
            ]">
                <Tab v-for="(tab, index) in tabs" v-slot="{ selected }" :key="index" as="template">
                    <button :class="[
                        'px-6 py-2 text-sm  font-medium flex items-center relative border-b-2 mt-6 focus:outline-none whitespace-nowrap',
                        selected
                            ? ' border-primary-400 text-white font-medium'
                            : 'border-transparent text-gray-100 hover:text-gray-200 hover:border-gray-300',
                    ]">
                        {{ tab.title }}

                    </button>
                </Tab>
            </TabList>

            <slot name="before-tabs" />

            <TabPanels>
                <slot />
            </TabPanels>
        </TabGroup>
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { TabGroup, TabList, Tab, TabPanels } from '@headlessui/vue'
const props = defineProps({
    defaultIndex: {
        type: Number,
        default: 0,
    },
    filter: {
        type: String,
        default: null,
    },
})
const emit = defineEmits(['change'])
const slots = useSlots()
const tabs = computed(() => slots.default().map((tab) => tab.props))
function onChange(d) {
    emit('change', tabs.value[d])
}
</script>