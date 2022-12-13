<script setup>
import {computed} from 'vue'
import {ChevronUpIcon, StarIcon} from '@heroicons/vue/24/outline'

const props = defineProps({
    score: Object,
    name: String,
    loopIndex: Number,
    small: Boolean,
    color: {
        type: String,
        default: 'text-orange-500'
    },
});
const scorePercentage = computed(() => {
    return Math.round(props.score.avg / 10 * 100);
})
</script>

<template>
    <div class="w-full">
        <div class="text-gray-200">
            <div class="text-xs justify-between">
                <span class="" v-text="name"/>
            </div>
            <div class="flex items-center space-x-1">
                <div class="w-full bg-gray-200 rounded-full">
                    <div
                        v-if="loopIndex === 0"
                        class="scale-y-175 bg-gradient-to-r from-blue-500 to-blue-600 py-0.5 text-xs font-medium leading-none rounded-full {{color}}"
                        :style="{width: scorePercentage +'%'}">
                    </div>
                    <div
                        v-if="loopIndex === 1"
                        class="scale-y-175 bg-gradient-to-r from-green-400 to-green-500 py-0.5 text-xs font-medium leading-none rounded-full {{color}}"
                        :style="{width: scorePercentage +'%'}">
                    </div>
                    <div
                        v-if="loopIndex === 2"
                        class="scale-y-175 bg-gradient-to-r from-salmon to-wild-watermelon py-0.5 text-xs font-medium leading-none rounded-full {{color}}"
                        :style="{width: scorePercentage +'%'}">
                    </div>
                </div>
                <span class="text-xs" v-text="score.avg"></span>
            </div>

        </div>
    </div>
</template>
