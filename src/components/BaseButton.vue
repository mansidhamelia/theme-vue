<script lang="ts" setup>
import { Ref, computed } from 'vue';

const props = defineProps({
    download: {
        type: Boolean,
        default: false,
    },
    contentLoading: {
        type: Boolean,
        default: false,
    },
    defaultClass: {
        type: String,
        default:
            'inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800',
    },

    disabled: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },

    size: {
        type: String,
        default: 'md',
        validator(value: any) {
            return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
        },
    },
    variant: {
        type: String,
        default: 'primary',

    },
})

const sizeClass = computed(() => {
    return {
        'px-2.5 py-1.5 text-xs leading-4 rounded': props.size === 'xs',
        'px-3 py-2 text-sm leading-4 rounded-md': props.size === 'sm',
        'px-4 py-2 text-sm leading-5 rounded-md': props.size === 'md',
        'px-4 py-2 text-base leading-6 rounded-md': props.size === 'lg',
        'px-6 py-3 text-base leading-6 rounded-md': props.size === 'xl',
    }
})

const placeHolderSize = computed(() => {
    switch (props.size) {
        case 'xs':
            return '32'
        case 'sm':
            return '38'
        case 'md':
            return '42'
        case 'lg':
            return '42'
        case 'xl':
            return '46'
        default:
            return ''
    }
})

const variantClass = computed(() => {
    return {
        'border-transparent shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600':
            props.variant === 'primary',

    }
})

const roundedClass = computed(() => {
    return props.rounded ? '!rounded-full' : ''
})

</script>

<template>

    <button :disabled="disabled" :class="[defaultClass, sizeClass, variantClass, roundedClass]">
        <slot />

    </button>
  
</template>
