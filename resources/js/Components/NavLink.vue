<script setup>
import {computed} from 'vue';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'bg-primary-color-50 md:bg-transparent border-primary-color-400 text-primary-color inline-flex items-center md:border-b-2 text-base md:text-sm font-medium leading-5 focus:outline-none focus:border-primary-color-700 py-2 px-3 transition border-l-4 md:border-l-0'
        : 'inline-flex items-center sm:py-3 md:border-b-2 border-transparent text-base md:text-sm font-medium leading-5 text-gray-600 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent hover:text-gray-900 group transition';
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot/>
    </Link>
</template>

