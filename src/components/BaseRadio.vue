<script lang="ts" setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { computed } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
const props = defineProps({
    id: {
        type: [String, Number],
        required: false,
        default: () => `radio_${Math.random().toString(36).substr(2, 9)}`,
    },
    label: {
        type: String,
        default: '',
    },

    modelValue: {
        type: [String, Number],
        default: '',
    },
    value: {
        type: [String, Number],
        default: '',
    },
    name: {
        type: [String, Number],
        default: '',
    },
    optionGroupClass: {
        type: String,
        default:
            'h-5 w-5 cursor-pointer rounded-full border border-gray-600  flex items-center justify-center',
    },
    borderColor: {
        type: String,
        default:
            'border-gray-600'
    },
    iconColor: {
        type: String,
        default:
            'blue'
    },
    optionGroupLabelClass: {
        type: String,
        default: 'block text-sm',
    },
    isPreset: {
        type: [Boolean],
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])

const selected = computed({
    get: () => props.modelValue,
    set: modelValue => emit('update:modelValue', modelValue),
})
</script>

<template>
    <RadioGroup v-model="selected" class="flex">

        <div class="rounded-md space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            <RadioGroupOption :id="id" v-slot="{ checked, active }" as="template" :value="value" :name="name"
                v-bind="$attrs">
                <div class="relative flex items-center cursor-pointer focus:outline-none">
                    <span :class="[checked && iconColor == 'blue' ? 'border-blue-600' : iconColor == 'red' ? 'border-red-600' : 'border-gray-600',
                        optionGroupClass, borderColor
                    ]" aria-hidden="true">
                        <BaseIcon v-if="checked" name="CheckIcon" class="absolute w-8 pl-1 " :class="[iconColor === 'blue'
                        ? 'text-blue-600' : 'text-red-600']">
                        </BaseIcon>
                        <span class="rounded-full w-1.5 h-1.5" :class="{ 'bg-white': checked }" />
                    </span>
                    <div class="flex flex-col ml-3">
                        <RadioGroupLabel as="span" :class="[
                            optionGroupLabelClass,
                        ]">
                            {{ label }}
                            <slot />
                        </RadioGroupLabel>
                    </div>
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>
