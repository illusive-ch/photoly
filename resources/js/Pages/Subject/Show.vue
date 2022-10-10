<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {ref, watch} from 'vue'
import {TabGroup, TabList, Tab, TabPanels, TabPanel, Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'
import SubjectScore from '@/Components/SubjectScore.vue';

const props = defineProps({
    subject: Object,
    comments: Object,
});

const selectedTab = ref(0)

const tabs = [
    {name: 'Scores', selected: true},
    {name: 'Data', selected: false},
    {name: 'Notes', selected: false},
    {name: 'Image', selected: false},
]
</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <h1 class="font-black text-5xl text-black-color mb-4">
                Test <span class="text-primary-color">Results</span>
            </h1>
            <p class="lg:text-16px md:text-15px text-13px lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-optional-color">
                Below is a list of your test results, click on the tabs to view detailed information.
            </p>
        </template>
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="bg-white rounded-md p-4">
                <div class="grid grid-cols-2 gap-4 divide-x divide-gray-300">
                    <div class="aspect-w-1 aspect-h-1 w-full">
                        <div>
                            <img :src="subject.data.image"
                                 alt="content_images"
                                 class="h-full w-full object-cover object-center sm:rounded-lg"/>
                        </div>
                    </div>
                    <div class="space-x-2">
                        <TabGroup :defaultIndex="0">
                            <div class="border-b border-gray-200">
                                <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                    <TabList class="mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between">
                                        <Tab v-slot="{ selected }" as="template"
                                             v-for="tab in tabs">
                                            <button
                                                type="button"
                                                :class="[selected ? 'border-pink-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']"
                                                class='whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'>
                                                {{ tab.name }}
                                            </button>
                                        </Tab>
                                    </TabList>
                                </div>
                            </div>
                            <TabPanels class="pb-48 mt-8">
                                <TabPanel>
                                    <div v-for="(score,name) in subject.data.scores"
                                         class="flex flex-col items-center mt-4">
                                        <SubjectScore :score="score" :name="name"/>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <h1>data</h1>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <h2 class="sr-only">Comments</h2>

                                        <div class="-my-10">
                                            <div v-for="(comment, index) in comments.data" :key="comment.id"
                                                 class="flex space-x-4 text-sm text-gray-500">
                                                <div
                                                    :class="[index === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10']">
                                                    <h3 class="font-medium text-gray-900">{{ comment.age }} /
                                                        {{ comment.gender }}</h3>
                                                    <p>
                                                        <span>{{ comment.date }}</span>
                                                    </p>

                                                    <div class="prose prose-sm mt-4 max-w-none text-gray-500"
                                                         v-text="comment.body"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

