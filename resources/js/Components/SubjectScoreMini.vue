<script setup>
import {computed} from 'vue'
import {ChevronUpIcon, StarIcon} from '@heroicons/vue/24/outline'

const props = defineProps({
    score: Object,
    name: String,
    small: Boolean,
    color: {
        type: String,
        default: 'text-blue-100'
    },
});
const scorePercentage = computed(() => {
    return Math.round(props.score.avg / 10 * 100);
})
</script>

<template>
    <div class="w-full">
        <div class="flex flex-col">
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                    class="bg-blue-600 py-2 text-xs font-medium leading-none rounded-full {{color}}"
                    :style="{width: scorePercentage +'%'}">
                </div>
            </div>
            <div class="flex justify-between">
                <span class="" v-text="name"/>
                <span class="font-bold" v-text="score.avg"></span>
            </div>
        </div>
    </div>
</template>
