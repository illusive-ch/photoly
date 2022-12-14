<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {ref, watch} from 'vue'
import {TabGroup, TabList, Tab, TabPanels, TabPanel, Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'
import SubjectScore from '@/Components/SubjectScore.vue';
import {ChartBarIcon, TagIcon, ChatBubbleLeftIcon, ChatBubbleOvalLeftIcon, PauseIcon} from '@heroicons/vue/24/solid'

const props = defineProps({
    subject: Object,
    comments: Object,
});

const selectedTab = ref(0)

const tabs = [
    {name: 'Votes', icon: ChartBarIcon, selected: true},
    {name: 'Tags', icon: TagIcon, selected: false},
    {name: 'Comments', icon: ChatBubbleLeftIcon, selected: false},
]
</script>

<template>
    <AppLayout title="Profile">
        <template #header>
        </template>
        <div class="px-4">
            <div class="grid lg:grid-cols-2 gap-4">
                <div class="aspect-square rounded-lg overflow-hidden">
                    <img :src="subject.data.image" alt="content_images" class="object-cover w-full h-full"/>
                </div>
                <div>
                    <div class="rounded-lg relative">
                        <div class="absolute inset-0  rounded-lg bg-gray-300 blur"/>
                        <dl class="grid grid-cols-4 divide-x-1 divide-gray-200 gap-2 justify-between text-center relative p-4 bg-white rounded-lg">
                            <template v-for="(score,name) in subject.data.scores">
                                <div class="">
                                    <dt class="text-xl font-bold text-gray-700" v-text="score.avg"></dt>
                                    <dd class="text-xs text-gray-500" v-text="name"></dd>
                                </div>
                            </template>
                            <div class="">
                                <dt class="text-xl font-bold text-gray-700"
                                    v-text="subject.data.depictions_count === null ? 0 : subject.data.depictions_count"></dt>
                                <dd class="text-xs text-gray-500">Total Votes</dd>
                            </div>
                        </dl>
                    </div>
                    <div class="space-x-2">
                        <TabGroup :defaultIndex="0">
                            <div class="">
                                <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                    <TabList class="mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between">
                                        <Tab v-slot="{ selected }" as="template"
                                             v-for="tab in tabs">
                                            <button
                                                type="button"
                                                class='inline-flex group items-center space-x-2 whitespace-nowrap py-4 px-1 font-medium text-sm focus:outline-none'>
                                                <component
                                                    :is="tab.icon"
                                                    :class="[selected ? 'fill-wild-watermelon text-wild-watermelon' : 'fill-gray-300 group-hover:fill-gray-700']"
                                                    class="w-4 h-4 lg:w-5 lg:h-5"/>
                                                <span
                                                    :class="[selected ? 'text-wild-watermelon' : 'text-gray-300 group-hover:text-gray-700']"
                                                    class="text-sm lg:text-lg">{{ tab.name }}</span>
                                            </button>
                                        </Tab>
                                    </TabList>
                                </div>
                            </div>
                            <TabPanels class="pb-48 mt-2">
                                <TabPanel>
                                    <div v-for="(score,name,index) in subject.data.scores"
                                         class="flex flex-col items-center">
                                        <SubjectScore :score="score" :name="name" :index="index"/>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <div class="flex items-center space-x-3 justify-center">
                                            <TagIcon class="w-5 h-5 fill-[#F7CF9F]"/>
                                            <h2 class="font-bold">
                                                Top 10 Tags
                                            </h2>
                                        </div>
                                        <div
                                            class="grid grid-cols-1 text-sm gap-4 mt-4">
                                            <template v-for="(tag, index) in tags.data" :key="comment.id">
                                                <p class="text-gray-600 border-b border-gray-200"
                                                   v-text="tag.name"/>
                                            </template>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <div class="flex items-center space-x-3 justify-center">
                                            <ChatBubbleOvalLeftIcon class="w-5 h-5 fill-blue-500"/>
                                            <h2 class="font-bold">
                                                Comments
                                            </h2>
                                        </div>

                                        <div
                                            class="grid grid-cols-1 text-sm gap-4 mt-4">
                                            <template v-for="(comment, index) in comments.data" :key="comment.id">
                                                <p class="text-gray-600 border-b border-gray-200"
                                                   v-text="comment.body"/>
                                            </template>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                    <div
                        v-if="subject.data.status"
                        class="hidden lg:flex justify-between">
                        <div class="flex items-center mt-4">
                            <div class="relative max-w-xl mx-auto">
                                <Link
                                    :href="route('category.subjects.update', {'category':1,'subject': subject.data.id})"
                                    as="button"
                                    method="put"
                                    :data="{ status: false }"
                                    class="uppercase relative inline-flex items-center rounded-full border border-black px-24 py-3 text-base font-medium text-black">
                                    <PauseIcon class="w-5 h-5"/>
                                    Pause
                                </Link>
                            </div>
                        </div>
                        <div class="flex items-center mt-4">
                            <div class="relative max-w-xl mx-auto">
                                <div
                                    class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                <Link
                                    :href="route('credit.index')"
                                    class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                    Get More Credits
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>


