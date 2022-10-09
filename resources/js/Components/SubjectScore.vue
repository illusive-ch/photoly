<script setup>
import {ChevronUpIcon, StarIcon} from '@heroicons/vue/24/outline'

const props = defineProps({
    score: Object,
    name: String,
    small: Boolean,
});
</script>

<template>
    <div class="w-full trustworthy relative">
        <div class="text-lg flex space-x-4 items-center">
            <span class="" v-text="name"/>
            <span class="font-bold" v-text="score.avg"></span>
        </div>
        <div class="relative h-3">
            <div class="h-8 bg-gray-50 border relative rounded-lg">
                <div
                    class="bg-blue-100 absolute inset-0 h-full"
                    :style="'width: '+score.confidence.higher*10+'%;'"/>
                <div
                    class="bg-blue-200 absolute inset-0 h-full"
                    :style="'width: '+((((score.confidence.higher * 10 - score.confidence.lower *10) / 4) * 3) + (score.confidence.lower*10)) +'%;'"/>
                <div
                    class="bg-blue-300 absolute inset-0 h-full"
                    :style="'width: '+((((score.confidence.higher * 10 - score.confidence.lower *10) / 4) * 2) + (score.confidence.lower*10)) +'%;'"/>
                <div
                    class="bg-blue-400 absolute inset-0 h-full"
                    :style="'width: '+((((score.confidence.higher * 10 - score.confidence.lower *10) / 4)) + (score.confidence.lower*10)) +'%;'"/>
                <div
                    class="bg-blue-500 absolute inset-0 h-full"
                    :style="'width: '+score.confidence.lower*10+'%;'"/>
            </div>
        </div>
        <div class="w-full mt-4 relative h-10">
            <div class="absolute"
                 :style="'left: '+((((score.confidence.higher * 10 - score.confidence.lower *10) / 4) * 2) + (score.confidence.lower*10)) +'%;'">
                <div class="flex flex-col">
                    <ChevronUpIcon class="w-5 h-5"/>
                    <span class="text-sm">Above Average</span>
                </div>
            </div>
        </div>
    </div>
</template>
