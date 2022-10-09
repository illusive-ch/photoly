<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {ref, watch} from 'vue'
import {TagIcon, StarIcon} from '@heroicons/vue/24/outline'
import SubjectScore from '@/Components/SubjectScoreMini.vue';

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
            <h1 class="font-black text-5xl text-black-color mb-4">
                My <span class="text-primary-color">Tests</span>
            </h1>
            <p class="lg:text-16px md:text-15px text-13px lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-optional-color">
                This is a list of all your active and inactive tests, to view details please click the test you are
                intersted in.
            </p>
        </template>
        <div class="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:py-24 lg:max-w-7xl lg:px-8">
            <div class="bg-white rounded-md p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        v-for="subject in subjects.data"
                        :key="subject.id"
                        :href="route('category.subjects.show', {category: subject.category.id, subject: subject.id})"
                        class="group cursor-pointer">
                        <div class="single-subject-grid flex flex-col space-y-4 border rounded-lg shadow-sm">
                            <div
                                class="aspect-square w-full overflow-hidden rounded-t-lg sm:aspect-w-2 sm:aspect-h-3">
                                <img :src="subject.image" alt=""
                                     class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <div class="flex flex-col space-y-4 px-2">
                                <span
                                    class="block font-medium text-secondary-color my-4">
                                    {{ subject.created_at }} ({{ subject.status ? 'Active' : 'Inactive' }})
                                </span>
                                <div v-for="(score,name) in subject.scores"
                                     class="flex flex-col space-y-4">
                                    <SubjectScore :score="score" :name="name"/>
                                </div>
                            </div>
                            <div class="border border-t-gray-200">
                                <div class="-mt-px flex divide-x divide-gray-200">
                                    <div class="flex w-0 flex-1">
                                        <div
                                            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                                            <TagIcon class="w-6 h-6 text-gray-400"/>
                                            <span class="ml-3" v-text="subject.category.name"/>
                                        </div>
                                    </div>
                                    <div class="-ml-px flex w-0 flex-1">
                                        <div
                                            class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                                            <StarIcon class="h-5 w-5 text-gray-400"/>
                                            <span
                                                class="ml-3">{{
                                                    subject.depictions_count ? subject.depictions_count : 0
                                                }} votes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
