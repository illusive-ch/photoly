<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {useForm} from '@inertiajs/inertia-vue3'
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, TransitionRoot} from '@headlessui/vue'
import {ArrowPathIcon} from '@heroicons/vue/24/outline'
import {ref} from 'vue';


const props = defineProps({
    subject: Object,
    category: Object,
});

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
    comment: null
});
const showImage = ref(true)

const saveVote = () => {
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
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Profile
            </h2>
        </template>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 id="subjects-heading" class="sr-only">Subjects</h2>
                <!--                <div v-for="subject in subjects.data" :key="subject.data.id" :href="subject.data.image" class="group">-->
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
                                <span class="mb-2 p-2 bg-gray-700 text-white uppercase w-full flex justify-center"
                                      v-text="category.name"></span>
                                <!-- Testimonial card-->
                                <div class="relative rounded-2xl pt-64 pb-10 shadow-xl">
                                    <TransitionRoot
                                        class="absolute inset-0"
                                        :show="showImage"
                                        enter="duration-500"
                                        enter-to="animate__animated animate__flipInY"
                                        leave="duration-1000"
                                        leave-to="animate__animated animate__flipOutY"
                                    >
                                        <img class="w-full rounded-2xl"
                                             :src="subject.data.image"
                                             alt="">
                                    </TransitionRoot>
                                    <!--                                        <div class="relative px-8">-->
                                    <!--                                            <div>-->
                                    <!--                                                <img class="h-12"-->
                                    <!--                                                     src="https://tailwindui.com/img/logos/workcation.svg?color=white"-->
                                    <!--                                                     alt="Workcation">-->
                                    <!--                                            </div>-->
                                    <!--                                            <blockquote class="mt-8">-->
                                    <!--                                                <div class="relative text-lg font-medium text-white md:flex-grow">-->
                                    <!--                                                    <svg-->
                                    <!--                                                        class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"-->
                                    <!--                                                        fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">-->
                                    <!--                                                        <path-->
                                    <!--                                                            d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>-->
                                    <!--                                                    </svg>-->
                                    <!--                                                    <p class="relative">Tincidunt integer commodo, cursus etiam-->
                                    <!--                                                        aliquam neque, et. Consectetur pretium in volutpat, diam.-->
                                    <!--                                                        Montes, magna cursus nulla feugiat dignissim id lobortis-->
                                    <!--                                                        amet.</p>-->
                                    <!--                                                </div>-->

                                    <!--                                                <footer class="mt-4">-->
                                    <!--                                                    <p class="text-base font-semibold text-indigo-200">Sarah-->
                                    <!--                                                        Williams, CEO at Workcation</p>-->
                                    <!--                                                </footer>-->
                                    <!--                                            </blockquote>-->
                                    <!--                                        </div>-->
                                </div>
                            </div>
                        </div>

                        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                            <!-- Content area -->
                            <div class="pt-12 sm:pt-16 lg:pt-20">
                                <form @submit.prevent="saveVote">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div v-for="criteria in subject.data.criteria">
                                            <h2 v-text="criteria.name"></h2>
                                            <div>
                                                <RadioGroup
                                                    v-model="form.vote[criteria.id]">
                                                    <RadioGroupLabel class="sr-only"
                                                                     v-text="criteria.name"></RadioGroupLabel>
                                                    <div class="space-y-4">
                                                        <RadioGroupOption as="template" v-for="option in scores"
                                                                          :key="criteria.id" :value="option"
                                                                          v-slot="{ checked }">
                                                            <div
                                                                :class="[form.vote[criteria.id] && form.vote[criteria.id].score === option.score? 'border-transparent border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-300', 'relative block cursor-pointer rounded-lg border bg-white px-4 py-4 divide-x divide-gray-300 shadow-sm focus:outline-none sm:flex sm:justify-between']">
                                                                <RadioGroupDescription as="span"
                                                                                       class="mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2">
                                                                    <div>
                                                                        <span class="font-medium text-gray-900"
                                                                              v-text="option.score"/>
                                                                    </div>
                                                                </RadioGroupDescription>
                                                                <RadioGroupDescription as="span"
                                                                                       class="mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2">
                                                                    <span class="font-medium text-gray-900"
                                                                          v-text="option.name"/>
                                                                </RadioGroupDescription>

                                                                <span
                                                                    :class="[form.vote[criteria.id] && form.vote[criteria.id].score === option.score ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                                                                    aria-hidden="true"/>
                                                            </div>
                                                        </RadioGroupOption>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <div>
                                            <label for="about"
                                                   class="block text-sm font-medium text-gray-700">Leave a
                                                note</label>
                                            <div class="mt-1">
                                                    <textarea v-model="form.comment" id="about" name="about" rows="3"
                                                              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                              placeholder="you@example.com"></textarea>
                                            </div>
                                            <!--                                            <p class="mt-2 text-sm text-gray-500">Brief description for your-->
                                            <!--                                                profile. URLs are hyperlinked.</p>-->
                                        </div>
                                        <button
                                            :disabled="form.processing"
                                            type="submit"
                                            :class="[form.processing ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700']"
                                            class="mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
                                            <span v-show="form.processing">
                                                <ArrowPathIcon class="w-5 h-5 animate-spin"/>
                                            </span>
                                            <span>
                                                Submit
                                            </span>
                                        </button>
                                        <div v-show="form.hasErrors"
                                             class=" mt-4 bg-red-300 border-red-600 p-4 rounded-md">
                                            <ul class="list-disc px-2">
                                                <li
                                                    v-for="error in form.errors"
                                                    class="text-red-900"
                                                    v-text="error"/>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--                </div>-->
            </div>
        </div>
    </AppLayout>
</template>


