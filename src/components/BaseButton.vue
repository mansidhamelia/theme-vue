<script lang="ts" setup>
import { computed } from 'vue';
import { useThemeStore } from '@/store/index'

const themeStore = useThemeStore()

const props = defineProps({
    disabled: {
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

const changeTheme = computed(() => {
    if (themeStore.color === 'blue') {
        return `bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`
    }
    else {
        return `bg-red-600 hover:bg-red-700 focus:ring-red-500`
    }
})
</script>

<template>
    <button
        class="border-transparent shadow-sm text-white inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        :disabled="disabled" :class="[sizeClass, changeTheme]">
        <slot />
    </button>

</template>
