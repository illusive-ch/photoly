<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {useForm} from '@inertiajs/inertia-vue3'
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, TransitionRoot} from '@headlessui/vue'
import {ArrowPathIcon, HandThumbUpIcon, ArrowPathRoundedSquareIcon} from '@heroicons/vue/24/outline'
import {computed, ref, watch} from 'vue';
import {CheckIcon, ChevronDownIcon} from '@heroicons/vue/20/solid'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {usePage, Link} from '@inertiajs/inertia-vue3'
import {VueReCaptcha, useReCaptcha} from 'vue-recaptcha-v3'
import {TabGroup, TabList, Tab, TabPanels, TabPanel} from '@headlessui/vue'


const props = defineProps({
    subject: Object,
    category: Object,
    index: Number,
});

const {executeRecaptcha, recaptchaLoaded} = useReCaptcha()


const categories = computed(() => usePage().props.value.categories.data)

const selectedTags = computed(() => {
    return props.subject.data.tags
        .filter(tag => tag.selected)
        .map(tag => tag);
})

const scores = [
    {name: 'Very', score: 3},
    {name: 'Yes', score: 2},
    {name: 'Somewhat', score: 1},
    {name: 'No', score: 0},
]
const form = useForm({
    _method: 'POST',
    vote: {},
    subject: props.subject.data,
    comment: null,
    recaptcha: null,
    tags: []
});


const recaptcha = async () => {
    form.recaptcha = 'loading'
    await recaptchaLoaded()
    form.recaptcha = await executeRecaptcha('login')
    await saveVote()
}


const criteriaLength = props.subject.data.criteria.length

const voteLength = computed(() => {
    return Object.keys(form.vote).length
})


const showComment = computed(() => {
    return criteriaLength === Object.keys(form.vote).length
})
const reversedScores = computed(() => {
    return scores.slice().reverse()
})

const showImage = ref(true)
const showForm = ref(true)
const selectedTab = ref(0)

function changeTab(index) {
    selectedTab.value = index
}

const saveVote = () => {
    form.tags = selectedTags
    showImage.value = false
    form.post(route('category.subjects.criteria.store', {
        category: usePage().props.value.category.id,
        subject: props.subject.data.id
    }), {
        preserveScroll: true,
        onSuccess: () => {
            selectedTab.value = 0
            form.reset()
            form.vote = {}
            showImage.value = true
        }
    })
}

</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <!-- Page title & actions -->
            <div class="hidden lg:block">
                <h1 class="text-3xl font-medium text-gray-900 sm:truncate">Voting</h1>
                <span class="text-base text-gray-500">Get your Vote on here</span>
            </div>
        </template>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="">
                    <div class="grid grid-cols-1 lg:grid-cols-2  gap-4">
                        <div class="aspect-square rounded-lg overflow-hidden">
                            <img :src="subject.data.image" alt="content_images" class="object-cover w-full h-full"/>
                        </div>
                        <div class="lg:hidden">
                            <TabGroup :selectedIndex="selectedTab" @change="changeTab">
                                <TabPanels>
                                    <TabPanel class="grid grid-cols-1 gap-4">
                                        <template v-for="(criteria,index) in subject.data.criteria">
                                            <div class="">
                                                <h2 class="font-medium text-base" v-text="criteria.name"></h2>
                                                <div
                                                    :class="{
                                                'bg-blue-300' : index === 0,
                                                'bg-green-200' : index === 1,
                                                'bg-pink-200' : index === 2,
                                                }"
                                                    class="rounded-xl px-4 py-1">
                                                    <RadioGroup
                                                        v-model="form.vote[criteria.id]">
                                                        <RadioGroupLabel class="sr-only"
                                                                         v-text="criteria.name"></RadioGroupLabel>
                                                        <div
                                                            class="flex justify-between">
                                                            <RadioGroupOption as="template"
                                                                              v-for="option in reversedScores"
                                                                              :key="criteria.id"
                                                                              :value="option"
                                                                              v-slot="{ checked }">
                                                                <div
                                                                    :class="{
                                                        'text-white bg-gradient-to-r from-blue-500 to-blue-600' : form.vote[criteria.id] && form.vote[criteria.id].score === option.score && index === 0,
                                                        'text-white bg-gradient-to-r from-green-400 to-green-500' : form.vote[criteria.id] && form.vote[criteria.id].score === option.score && index === 1,
                                                        'text-white primary-gradient' : form.vote[criteria.id] && form.vote[criteria.id].score === option.score && index === 2,
                                                    }"
                                                                    class="relative block cursor-pointer rounded-xl py-1 px-2">
                                                                    <RadioGroupDescription as="span" class="">
                                                                        <span class="text-sm" v-text="option.name"/>
                                                                    </RadioGroupDescription>
                                                                    <span
                                                                        :class="[form.vote[criteria.id] && form.vote[criteria.id].score === option.score ? 'boring-primary-color' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                                                                        aria-hidden="true"/>
                                                                </div>
                                                            </RadioGroupOption>
                                                        </div>
                                                    </RadioGroup>
                                                </div>
                                            </div>
                                        </template>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2 class="font-medium text-base">Tags</h2>
                                        <div class="flex flex-wrap gap-2 mt-2">
                                            <template v-for="tag in subject.data.tags">
                                                <div class="flex">
                                                    <input type="checkbox" v-model="tag.selected" :id="'tag'+tag.id"
                                                           class="peer hidden"/>
                                                    <label :for="'tag'+tag.id"
                                                           class="select-none cursor-pointer rounded-full bg-blue-50 border border-gray-200 px-2 py-1 text-sm font-medium text-gray-800 transition-colors duration-200 ease-in-out peer-checked:bg-black peer-checked:text-white"
                                                           v-text="tag.name"></label>
                                                </div>
                                            </template>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2 class="font-medium text-base">Notes</h2>
                                        <textarea v-model="form.comment" id="about" name="about" rows="8"
                                                  placeholder="Give the user some constructive feedback"
                                                  class="placeholder-gray-300 block mt-2 w-full rounded-lg border-gray-300 text-gray-500 text-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"></textarea>
                                    </TabPanel>
                                </TabPanels>
                                <TabList class="mx-auto mt-4 text-center">
                                    <Tab>
                                    </Tab>
                                    <Tab>
                                        <div v-if="selectedTab === 0" class="relative max-w-xl mx-auto">
                                            <TransitionRoot
                                                :show="Object.keys(form.vote).length >= 3"
                                                enter="duration-500"
                                                enter-to="animate__animated animate__bounceIn"
                                                leave="duration-1000"
                                                leave-to="animate__animated animate__bounceOut"
                                            >
                                                <div
                                                    class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                                <button type="button"
                                                        class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                                    Next
                                                </button>
                                            </TransitionRoot>
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div v-if="selectedTab === 1" class="relative max-w-xl mx-auto">
                                            <div
                                                class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                            <button type="button"
                                                    class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                                Next
                                            </button>
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div v-if="selectedTab === 2" class="relative max-w-xl mx-auto">
                                            <div
                                                class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                            <button type="button"
                                                    :disabled="form.processing"
                                                    @click="recaptcha"
                                                    class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                                <span v-if="!form.processing">Vote</span>
                                                <ArrowPathRoundedSquareIcon
                                                    v-if="form.processing"
                                                    class="animate-spin h-6 w-6 text-white" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Tab>
                                </TabList>
                            </TabGroup>
                        </div>
                        <div class="hidden lg:grid  grid-cols-1 gap-3">
                            <div class="grid grid-cols-1 gap-2">
                                <template v-for="(criteria,index) in subject.data.criteria">
                                    <div class="">
                                        <h2 class="font-medium text-base" v-text="criteria.name"></h2>
                                        <div
                                            :class="{
                                                'bg-blue-300' : index === 0,
                                                'bg-green-200' : index === 1,
                                                'bg-pink-200' : index === 2,
                                                }"
                                            class="rounded-xl px-4 py-1">
                                            <RadioGroup
                                                v-model="form.vote[criteria.id]">
                                                <RadioGroupLabel class="sr-only"
                                                                 v-text="criteria.name"></RadioGroupLabel>
                                                <div
                                                    class="flex justify-between">
                                                    <RadioGroupOption as="template"
                                                                      v-for="option in reversedScores"
                                                                      :key="criteria.id"
                                                                      :value="option"
                                                                      v-slot="{ checked }">
                                                        <div
                                                            :class="{
                                                        'text-white bg-gradient-to-r from-blue-500 to-blue-600' : form.vote[criteria.id] && form.vote[criteria.id].score === option.score && index === 0,
                                                        'text-white bg-gradient-to-r from-green-400 to-green-500' : form.vote[criteria.id] && form.vote[criteria.id].score === option.score && index === 1,
                                                        'text-white primary-gradient' : form.vote[criteria.id] && form.vote[criteria.id].score === option.score && index === 2,
                                                    }"
                                                            class="relative block cursor-pointer rounded-xl py-1 px-2">
                                                            <RadioGroupDescription as="span" class="">
                                                                <span class="text-sm" v-text="option.name"/>
                                                            </RadioGroupDescription>
                                                            <span
                                                                :class="[form.vote[criteria.id] && form.vote[criteria.id].score === option.score ? 'boring-primary-color' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                                                                aria-hidden="true"/>
                                                        </div>
                                                    </RadioGroupOption>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div>
                                <h2 class="font-medium text-base">Tags</h2>
                                <div class="flex flex-wrap gap-2 mt-2">
                                    <template v-for="tag in subject.data.tags">
                                        <div class="flex">
                                            <input type="checkbox" v-model="tag.selected" :id="'tag'+tag.id"
                                                   class="peer hidden"/>
                                            <label :for="'tag'+tag.id"
                                                   class="select-none cursor-pointer rounded-full bg-blue-50 border border-gray-200 px-4 py-1 text-sm font-medium text-gray-800 transition-colors duration-200 ease-in-out peer-checked:bg-black peer-checked:text-white"
                                                   v-text="tag.name"></label>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div>
                                <h2 class="font-medium text-base">Notes</h2>
                                <textarea v-model="form.comment" id="about" name="about" rows="5"
                                          placeholder="Give the user some constructive feedback"
                                          class="placeholder-gray-300 block mt-2 w-full rounded-lg border-gray-300 text-gray-500 text-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"></textarea>
                            </div>
                            <TransitionRoot
                                :show="Object.keys(form.vote).length >= 3"
                                enter="duration-500"
                                enter-to="animate__animated animate__bounceIn"
                                leave="duration-1000"
                                leave-to="animate__animated animate__bounceOut"
                            >
                                <button
                                    @click="recaptcha"
                                    :disabled="form.processing"
                                    type="submit"
                                    class="mt-2 uppercase relative inline-flex gap-2 items-center rounded-full primary-gradient py-2 px-6 text-base font-medium text-white">
                                    <HandThumbUpIcon
                                        v-if="!form.processing"
                                        class="h-6 w-6 text-white" aria-hidden="true"/>
                                    <ArrowPathRoundedSquareIcon
                                        v-if="form.processing"
                                        class="animate-spin h-6 w-6 text-white" aria-hidden="true"/>

                                    <span class="hidden lg:block">Vote</span>
                                </button>
                            </TransitionRoot>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>


