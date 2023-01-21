<template>
    <div class="border border-b-2 w-min px-7 text-left mt-2 pb-4 ">
        <!-- progress bar -->
        <div class="w-full">
            <nav aria-label="Progress">
                <ol role="list" class="flex items-center">
                    <li v-for="(step, stepIdx) in steps" :key="step.name"
                        :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-56' : '', 'relative']">

                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="h-0.5 w-full bg-gray-200 " />
                        </div>
                        <a href="#"
                            class="relative flex h-8 w-8 items-center justify-center rounded-full border-white border-4"
                            :class="[step.status === 'current' ? 'bg-blue-600' : 'bg-gray-400']" aria-current="step">
                            <BaseIcon :name="step.icon" class="text-white h-4 w-4" aria-hidden="true" :is-solid="true">
                            </BaseIcon>
                            <span class="sr-only">{{ step.name }}</span>
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
        <hr>
        <!-- logo -->
        <div class="py-3 text-left">
            <label>I want a company logo</label>
            <div class="flex space-x-5 mt-2 ">
                <BaseRadio v-for="(label, value) in themeStore.logoStyle" :key="value" v-model="themeStore.one"
                    :label="label.title" name="waitType" :value="label.title" class="mt-1" />
            </div>
        </div>
        <div class="py-3">
            <label>
                Preset Color
            </label>
            <div class="flex space-x-5 mt-2 ">
                <BaseRadio v-for="(color, index) in preset" :key="index" v-model="themeStore.color" :is-preset="true"
                    :label="color.title" :value="color.id" :icon-color="color.id"></BaseRadio>
            </div>
        </div>

        <!-- switch section -->

        <label class="pt-3">Preset apply only: Header background, Button, Radio button & switch</label>
        <div class="my-6">

            <BaseSwitchSection v-model="res1" labelRight="I want a Header" />
            <BaseSwitchSection v-model="res1" labelRight="I want a Footer" />
            <BaseSwitchSection v-model="res1" labelRight="I want a Drawer overlay Mode (requires Header or Footer)" />
            <BaseSwitchSection v-model="res1" labelRight="I want a left-side Drawer" />
            <BaseSwitchSection v-model="res1" labelRight="I want a right-side Drawer" />
            <BaseSwitchSection v-model="res1" labelRight="I want a navigation tabs (requires Header)" />
            <BaseSwitchSection v-model="res1" labelRight="I want a Bottom Menu (requires Footer)" />
        </div>
        <hr>

        <div class="py-3">
            <BaseButton>Continue</BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">

import BaseSwitchSection from '@/components/BaseSwitchSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import { ref, watch } from 'vue';
import { useThemeStore } from '@/store/index'


const themeStore = useThemeStore()
const one = ref()

const preset = [
    { id: 'blue', title: 'Blue (#1976d2)' },
    { id: 'red', title: 'Red (#ff0000)' },
]
const steps = [
    { name: 'Step 1', href: '#', status: 'current', icon: 'PencilIcon' },
    { name: 'Step 2', href: '#', status: 'upcoming', icon: 'CogIcon' },
    { name: 'Step 3', href: '#', status: 'upcoming', icon: 'PlayIcon' },

]
const res1 = ref(true)
const res2 = ref(false)
const res3 = ref(false)


watch(
    () => res1.value,
    (value) => {
        console.log(value, 'value')
    },
)

function changeColor(color) {
    if (color == 'blue') {
        return `border-blue-500`
    }
    else {
        return `border-red-500`
    }

}


</script>