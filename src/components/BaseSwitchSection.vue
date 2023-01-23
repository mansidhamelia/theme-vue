
<script lang="ts" setup>
import { Switch } from '@headlessui/vue'

import { computed } from 'vue'
const props = defineProps({

    labelClass: {
        type: [String, Array, Object],
        default: '',
    },
    labelRight: {
        type: String,
        default: '',
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
    themeColor: {
        type: String,
        default:
            'blue'
    },
})

const emit = defineEmits(['update:modelValue'])

const enabled = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
})
</script>

<template>

    <div class="flex flex-row items-start mt-3">
        <Switch v-model="enabled"
            class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none ">

            <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
            <span aria-hidden="true"
                :class="[enabled && themeColor === 'blue' ? 'bg-blue-400 ' : enabled && themeColor === 'red' ? 'bg-red-400' : 'bg-gray-200', 'pointer-events-none absolute mx-auto h-3 w-7 rounded-full transition-colors duration-200 ease-in-out']" />
            <span aria-hidden="true"
                :class="[enabled && themeColor === 'blue' ? 'translate-x-5 bg-blue-600 border border-blue-600' : enabled && themeColor === 'red' ? 'translate-x-5 bg-red-600 border border-red-600' : 'translate-x-0', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out']" />
        </Switch>

        <span v-if="labelRight" class="ml-3 cursor-pointer" :class="labelClass">
            {{
    labelRight
            }}
        </span>
    </div>
</template>
