<template>

    <footer>
        <div class="h-12 bg-gray-500 bottom-0">
            <div class="flex justify-between items-center h-full">
                <BaseIcon name="MenuIcon" class="mx-5 text-white h-5 w-5"></BaseIcon>
                <div class="flex">
                    <BaseIcon name="MailIcon" :is-solid="true" class="h-6 w-6 text-white"></BaseIcon>
                    <label class="text-white ml-2">MAILS</label>
                    <BaseIcon name="ClockIcon" :is-solid="true" class="h-6 w-6 text-white ml-5"></BaseIcon>
                    <label class="text-white ml-2">ALARMS</label>

                    <BaseIcon name="FilmIcon" :is-solid="true" class="h-6 w-6 text-white ml-5"></BaseIcon>
                    <label class="text-white ml-2">MOVIES</label>
                </div>
                <BaseIcon name="MenuIcon" class="mx-5 text-white h-5 w-5"></BaseIcon>
            </div>
        </div>
    </footer>

</template>
<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon.vue';
</script>
