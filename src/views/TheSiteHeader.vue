<template>
  <div class="sticky top-0 max-w-full h-32 shadow" :class="changeColor">
    <div class="flex justify-between items-center h-16">

      <BaseIcon name="MenuIcon" class="mx-5 text-white h-5 w-5"></BaseIcon>
      <img :src=logo :class="logoStyle" v-bind:class="logoStyle">
      <BaseIcon name="MenuIcon" class="mx-5 text-white h-5 w-5"></BaseIcon>

    </div>

    <BaseTabGroup :selected-index="selectedIndex" @change="changeTabStatus">
      <BaseTab :title="tabs[0].name">
      </BaseTab>
      <BaseTab :title="tabs[1].name"></BaseTab>
      <BaseTab :title="tabs[2].name"></BaseTab>

    </BaseTabGroup>

  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/tigeen_logo.png'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseTabGroup from '@/components/BaseTabGroup.vue'
import BaseTab from '@/components/BaseTab.vue'
import { ref, computed } from 'vue'
import { useThemeStore } from '@/store/index'

const themeStore = useThemeStore()
const tabs = [
  { name: 'TAB ONE', href: '#', current: true },
  { name: 'TAB TWO', href: '#', current: false },
  { name: 'TAB THREE', href: '#', current: false },
]
const selectedIndex = ref(0)


const logoStyle = computed(() => {
  switch (themeStore.one) {
    case 'Left':
      return `mr-auto`
      break
    case 'Right':
      return `ml-auto`
      break
    case 'Center':
      return ``
      break
    case 'Disable':
      return `invisible`
      break
    default:
      return `mr-auto`
  }
});

const changeColor = computed(() => {
  if (themeStore.color === 'blue') {
    return `bg-blue-500`
  }
  else {
    return `bg-red-500`
  }
})

function changeTabStatus(val: any, index: any) {
  selectedIndex.value = index
}
</script>