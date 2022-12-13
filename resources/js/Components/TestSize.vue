<script setup>
import {BanknotesIcon} from '@heroicons/vue/20/solid'
import {computed} from "vue";

const props = defineProps({
    total: Number,
    title: String,
    description: String,
    color: String,
    highlightColor: String,
    cost: Number,
    amount: Number,
    selected: Boolean,
});

const computedTotal = computed(() => {
    return 0 + props.cost + props.total
})
</script>

<template>
    <div :class="{'border border-wild-watermelon rounded-2xl': selected}" class="cursor-pointer">
        <div
            :class="[color]"
            class="grid grid-cols-7 rounded-2xl gap-2">
            <div
                :class="[highlightColor]"
                class="col-span-1 min-w flex-shrink-0 p-4 rounded-l-2xl flex-shrink-0 flex items-center">
                <img class="w-5 h-5" :src="asset('assets/img/tube.png')" alt="test"/>
            </div>
            <div class="col-span-4 py-2">
            <span class="text-base font-medium">
                {{ title }}
                <span class="text-gray-400 text-xs">
                    ( {{ amount }} votes )
                </span>
            </span>
                <p class="text-sm" v-text="description"></p>
            </div>
            <div class="col-span-2 flex items-center">
                <template v-if="computedTotal === 0">
                <span type="button"
                      class="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-400 to-green-600">
                    Free
                </span>
                </template>
                <template v-if="computedTotal !== 0">
                    <div
                        class="inline-flex items-center rounded-full px-6 py-2 text-xs font-medium text-gray-500 bg-white">
                        <span v-text="computedTotal" class="font-medium text-gray-900"></span>
                        <BanknotesIcon class="w-4 h-4 fill-wild-watermelon"/>
                        <!--                    <span class="text-gray-200">/{{ amount }} votes</span>-->
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
