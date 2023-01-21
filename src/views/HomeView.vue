<template>
  <TheSiteHeader />
  <div class="flex justify-center">

    <ThemeSettings />
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TheSiteHeader from "@/views/TheSiteHeader.vue";
import ThemeSettings from "./ThemeSettings.vue";
</script>
