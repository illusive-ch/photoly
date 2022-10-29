<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {useForm} from '@inertiajs/inertia-vue3'
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, TransitionRoot} from '@headlessui/vue'
import {ArrowPathIcon} from '@heroicons/vue/24/outline'
import {computed, ref, watch} from 'vue';
import {CheckIcon, ChevronDownIcon} from '@heroicons/vue/20/solid'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {usePage, Link} from '@inertiajs/inertia-vue3'
import {VueReCaptcha, useReCaptcha} from 'vue-recaptcha-v3'


const props = defineProps({
    subject: Object,
    category: Object,
});

const {executeRecaptcha, recaptchaLoaded} = useReCaptcha()


const categories = computed(() => usePage().props.value.categories.data)

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
    recaptcha: null
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

const showImage = ref(true)
const showForm = ref(true)

const saveVote = () => {
    console.log('called')
    showImage.value = false
    form.post(route('category.subjects.criteria.store', {
        category: props.category.id,
        subject: props.subject.data.id
    }), {
        preserveScroll: true,
        onSuccess: () => {
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
            <h1 class="font-black text-3xl lg:text-5xl text-black-color mb-4">
                Vote:
                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="text-primary-color inline-flex items-center w-full justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            {{ category.name }}
                            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <template v-for="category in categories">
                                    <MenuItem v-slot="{ active }">
                                        <Link :href="route('category.subjects.index',category.id)"
                                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                                              v-text="category.name"/>
                                    </MenuItem>
                                </template>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </h1>
            <p class="lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-optional-color">
                You are currently voting on the {{ category.name }} category, try to judge the photo as a whole and not
                just the person using the following categories:
            </p>
        </template>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 id="subjects-heading" class="sr-only">Subjects</h2>
                <div class="relative bg-white py-16 sm:py-24">
                    <div
                        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                        <div class="relative sm:py-16 lg:py-0">
                            <div aria-hidden="true"
                                 class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                <div
                                    class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"></div>
                                <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                     width="404" height="392" fill="none" viewBox="0 0 404 392">
                                    <defs>
                                        <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0"
                                                 width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" class="text-gray-200"
                                                  fill="currentColor"/>
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="392"
                                          fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                                </svg>
                            </div>
                            <div
                                class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                                <!-- Testimonial card-->
                                <div class="relative rounded-2xl shadow-xl">
                                    <TransitionRoot
                                        class=""
                                        :show="showImage"
                                        enter="duration-500"
                                        enter-to="animate__animated animate__flipInY"
                                        leave="duration-1000"
                                        leave-to="animate__animated animate__flipOutY"
                                    >
                                        <div
                                            class="single-team-member rounded-md md:rounded-lg bg-white">
                                            <form @submit.prevent="recaptcha">
                                                <div class="">
                                                    <img
                                                        :src="subject.data.image"
                                                        class="object-cover h-128 w-full rounded-tl-lg rounded-tr-lg md:rounded-tl-lg md:rounded-tr-lg"
                                                        alt="team"/>
                                                    <template v-for="(criteria,index) in subject.data.criteria">
                                                        <TransitionRoot
                                                            :show="showForm && !form.vote[subject.data.criteria[index].id] &&
                                                                ( subject.data.criteria[index-1] && form.vote[subject.data.criteria[index-1].id] !== undefined )"
                                                            enter="duration-500"
                                                            enter-to="animate__animated animate__zoomIn"
                                                            leave="duration-500"
                                                            leave-to="animate__animated animate__zoomOut"
                                                        >
                                                            <div
                                                                class="absolute bottom-28 bg-gray-200 opacity-75 w-full p-4 over">
                                                                <h2 class="w-full bg-gray" v-text="criteria.name"></h2>
                                                                <div>
                                                                    <RadioGroup
                                                                        v-model="form.vote[criteria.id]">
                                                                        <RadioGroupLabel class="sr-only"
                                                                                         v-text="criteria.name"></RadioGroupLabel>
                                                                        <div
                                                                            class="flex space-y-1 justify-around items-center">
                                                                            <RadioGroupOption as="template"
                                                                                              v-for="option in scores"
                                                                                              :key="criteria.id"
                                                                                              :value="option"
                                                                                              v-slot="{ checked }">
                                                                                <div
                                                                                    :class="[form.vote[criteria.id] && form.vote[criteria.id].score === option.score? 'border-transparent border-primary-color ring-2 ring-primary-color-500' : 'border-gray-300', 'relative block cursor-pointer rounded-lg border bg-white hover:bg-gray-100 px-4 py-4 divide-x divide-gray-300 shadow-sm focus:outline-none sm:flex sm:justify-between']">
                                                                                    <RadioGroupDescription as="span"
                                                                                                           class="mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2">
                                                                                <span
                                                                                    class="font-medium text-gray-900 hover:bg-gray-200"
                                                                                    v-text="option.name"/>
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
                                                        </TransitionRoot>
                                                    </template>
                                                    <TransitionRoot
                                                        :show="showForm && showComment"
                                                        enter="duration-500"
                                                        enter-to="animate__animated animate__zoomIn"
                                                        leave="duration-500"
                                                        leave-to="animate__animated animate__zoomOut"
                                                    >
                                                        <div
                                                            class="absolute bottom-40 bg-gray-200 opacity-90 w-full p-4 over">
                                                            <label for="about"
                                                                   class="block text-sm font-medium text-gray-700">
                                                                Leave a note
                                                            </label>
                                                            <div class="mt-1">
                                                    <textarea v-model="form.comment" id="about" name="about" rows="3"
                                                              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:boring-primary-color focus:ring-primary-color sm:text-sm"
                                                              placeholder="you@example.com"></textarea>
                                                            </div>
                                                        </div>
                                                    </TransitionRoot>
                                                </div>

                                                <div class="relative p-4 flex justify-between items-center">
                                                    <div class="">
                                                        <h3 class="font-bold text-xl mt-4 mb-4"
                                                            v-text="category.name"/>
                                                        <div class="flex">
                                                        <span v-if="subject.data.context !== ''"
                                                              class="text-lg text-primary-color font-medium"
                                                              v-text="subject.data.context"/>
                                                            <span v-if="subject.data.position !== ''"
                                                                  class="text-lg text-primary-color font-medium"
                                                                  v-text="subject.data.position"/>
                                                        </div>

                                                    </div>
                                                    <div
                                                        class="">
                                                        <button
                                                            type="button"
                                                            v-show="!showComment"
                                                            @click="showForm = !showForm"
                                                            class="btn ease-in duration-300 bg-white shadow-md bg-gray-50 p-2 text-center relative rounded-full">
                                                            <ChevronDownIcon class="h-10 w-10 transition duration-300"
                                                                             :class="{'rotate-180': showForm}"/>
                                                        </button>
                                                        <button
                                                            v-show="showComment"
                                                            :disabled="form.processing"
                                                            type="submit"
                                                            :class="[form.processing ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700']"
                                                            class="mt-4 flex max-w-xs flex-1 items-center justify-center py-3 px-8 text-white focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full inline-block font-semibold rounded-md text-white bg-secondary-gradient-color shadow-md ease-in duration-300">
                                                        <span v-show="form.processing">
                                                            <ArrowPathIcon class="w-5 h-5 animate-spin"/>
                                                        </span>
                                                            <span>
                                                            Submit
                                                        </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </TransitionRoot>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:block relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                            <!-- Content area -->
                            <div class="pt-12 sm:pt-16 lg:pt-20">
                                <dl class="mt-20 md:mt-30">
                                    <template v-for="criteria in subject.data.criteria">
                                        <dt v-text="criteria.name"
                                            class="text-black-color relative font-bold last:mb-0 mt-4 text-lg"/>
                                        <dd v-text="criteria.description"
                                            class="font-normal leading-7 md:leading-8 text-optional-color"/>
                                    </template>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>


