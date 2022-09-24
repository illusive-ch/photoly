<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {ref, watch} from 'vue'
import {Head, Link} from '@inertiajs/inertia-vue3';

const props = defineProps({
    subjects: Object,
});

const selectedTab = ref(0)
const tabs = [
    {name: 'Photo', selected: true},
    {name: 'Category', selected: false},
    {name: 'Details', selected: false},
    {name: 'Test Size', selected: false},
]
</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create New Test
            </h2>
        </template>
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="bg-white rounded-md p-4">
                <div class="grid grid-cols-3 gap-4">
                    <Link
                        v-for="subject in subjects.data"
                        :key="subject.id"
                        :href="route('category.subjects.show', {category: subject.category.id, subject: subject.id})"
                        class="group cursor-pointer">
                        <div
                            class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                            <img :src="subject.image" alt=""
                                 class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <div
                            class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
