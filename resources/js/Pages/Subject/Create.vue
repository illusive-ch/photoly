<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {useForm} from "@inertiajs/inertia-vue3";
import {TransitionRoot} from '@headlessui/vue'
import {ref, watch} from 'vue'
import {TabGroup, TabList, Tab, TabPanels, TabPanel, Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'
import {reactive, computed} from 'vue'
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import SelectWithCheck from '@/Components/SelectWithCheck.vue';
import {MediaLibraryAttachment} from '@spatie/media-library-pro-vue3-attachment';
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'


const props = defineProps({
    media: Object,
    categories: Object,
});

const selectedTab = ref(0)
const tabs = [
    {name: 'Photo', selected: true},
    {name: 'Category', selected: false},
    {name: 'Details', selected: false},
    {name: 'Test Size', selected: false},
]

const form = useForm({
    _method: 'POST',
    media: null,
    upload: false,
    category: {},
    options: {},
});

const setSubject = (subject) => {
    console.log('here')
    form.media = subject
    form.upload = false
    changeTab(selectedTab.value + 1)
}
const onUpload = (subject) => {
    form.upload = true
    form.media = subject
    console.log('ON UPLOAD SWITCHING')
    changeTab(1)
}
const changeTab = (index) => {
    resetOptions()
    selectedTab.value = index
}
const nameWithComma = (array, index) => {
    if (index !== array.length - 1) {
        return `${array[index]},`;
    } else {
        return array[index];
    }
}
const resetOptions = () => {
    console.log('resetting')
    form.options = {}
}
const allowedAges = computed(() => {
    let ages = [];
    for (var i = 18; i <= 99; i++) {
        ages.push({
            id: i,
            name: `${i} yrs old`
        });
    }
    return ages
})

const testMedia = computed(() => {
    if (form.media === null) {
        return null
    }
    if (form.media.url) {
        return form.media.url
    }
    console.log(form.media)

    const firstValue = Object.values(form.media)[0];
    if (firstValue.preview_url) {
        return firstValue.preview_url
    }
    console.log('FORMMEDIA')

    console.log(form.media)
    return false
})
</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <h1 class="font-black text-5xl text-black-color mb-4">
                Create <span class="text-primary-color">Test</span>
            </h1>
            <p class="lg:text-16px md:text-15px text-13px lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-optional-color">
                You may create a brand new test, or use an image from a previous test.
            </p>
        </template>
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="bg-white rounded-md p-4">
                <form @submit.prevent="form.post(route('category.subjects.store', form.category.id))">
                    <tab-group :defaultIndex="0" :selectedIndex="selectedTab" @change="changeTab">
                        <div class="border-b border-gray-200">
                            <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                <tab-list class="mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between">
                                    <Tab v-slot="{ selected }" as="template"
                                         v-for="tab in tabs"
                                         :key="tab.name"
                                         :aria-current="tab.selected ? tab.name : ''">
                                        <button
                                            type="button"
                                            :class="[selected ? 'border-pink-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']"
                                            class='whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'>
                                            {{ tab.name }}
                                        </button>
                                    </Tab>
                                </tab-list>
                            </div>
                        </div>
                        <tab-panels class="pb-4 mt-8">
                            <tab-panel v-slot="{selected}">
                                <media-library-attachment
                                    @change="onUpload"
                                    name="subject"
                                    vapor
                                />
                                <div
                                    class="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                                    <div v-for="item in media.data" :key="media.url"
                                         @click="setSubject(item)"
                                         class="group cursor-pointer">
                                        <div
                                            class="aspect-square w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                            <img :src="item.url" alt=""
                                                 class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                                        </div>
                                        <div
                                            class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                        </div>
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel>
                                <div class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                                    <div class="mx-auto max-w-2xl lg:max-w-none">
                                        <!-- Product -->
                                        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                                            <div class="aspect-w-1 aspect-h-1 w-full">
                                                <div>
                                                    <img v-if="testMedia" :src="testMedia"
                                                         alt="content_images"
                                                         class="h-full w-full object-cover object-center sm:rounded-lg"/>
                                                </div>
                                            </div>


                                            <!-- Product info -->
                                            <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                                <div class="mt-6 flex flex-col items-center">
                                                    <h3 class="text-lg text-gray-600 font-bold">What category of test is
                                                        this?</h3>
                                                    <h4 class="text-md text-gray-600 mt-1">Each category tests different
                                                        traits.</h4>

                                                    <RadioGroup v-model="form.category" class="mt-4">
                                                        <RadioGroupLabel class="sr-only"> Choose Category
                                                        </RadioGroupLabel>
                                                        <div class="flex items-center justify-center">
                                                            <RadioGroupOption as="template"
                                                                              class="border-gray-300 px-4 py-2"
                                                                              v-for="(category,index) in categories"
                                                                              :key="category.id" :value="category"
                                                                              :class="[
                                                                            index === 0 ? 'border-l border-t border-b rounded-md':'',
                                                                            index !== 0 && index !== categories.length - 1? 'border':'',
                                                                            index === categories.length - 1 ? 'border-r rounded-md border-t border-b':''
                                                                            ]"
                                                                              v-slot="{ active, checked }">
                                                                <div
                                                                    :class="[form.category, active && checked ? 'bg-gray-300 ring-none' : '', !active && checked ? 'bg-gray-300' : '', '-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none']">
                                                                    <RadioGroupLabel as="span"
                                                                                     class="text-xl">
                                                                    <span class="uppercase"
                                                                          v-text="category.name"></span>
                                                                    </RadioGroupLabel>
                                                                </div>
                                                            </RadioGroupOption>
                                                        </div>
                                                    </RadioGroup>
                                                </div>

                                                <div class="mt-10 flex justify-center flex-col items-center">
                                                    <div v-show="Object.keys(form.category).length !== 0"
                                                         class="flex items-center space-x-2">
                                                        <span class="text-xl">Traits:</span>
                                                        <ul class="flex items-center space-x-2 text-xl">
                                                            <li
                                                                v-for="(trait,index) in form.category.criterias"
                                                                v-text="index === (form.category.criterias.length - 1) ? trait.name : `${trait.name},`"
                                                                class="capitalize"
                                                                :class="[
                                                                index === 0 ? 'text-green-500' : '',
                                                                index === 1 ? 'text-blue-500':'',
                                                                index === 2 ? 'text-orange-500' : ''
                                                                ]"
                                                            ></li>
                                                        </ul>
                                                    </div>
                                                    <button @click.prevent="changeTab(2)"
                                                            class="mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel>
                                <div class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                                    <div class="mx-auto max-w-2xl lg:max-w-none">
                                        <!-- Product -->

                                        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">

                                            <div class="aspect-w-1 aspect-h-1 w-full">
                                            <span v-text="form.category.name"
                                                  class="p-2 bg-gray-700 text-white uppercase w-full flex justify-center"
                                            />
                                                <div class="mt-2">
                                                    <img v-if="testMedia" :src="testMedia" alt="content_image"
                                                         class="h-full w-full object-cover object-center sm:rounded-lg"/>
                                                </div>
                                                <div
                                                    v-if="form.options && form.options.multiplePeople && form.options.position !== undefined"
                                                    class="flex flex-col mt-4"
                                                >
                                                    <span class="text-lg font-bold">Position</span>
                                                    <span v-text="form.options.position.name"></span>
                                                </div>
                                                <div
                                                    v-if="form.options && form.options.context"
                                                    class="flex flex-col mt-4"
                                                >
                                                    <span class="text-lg font-bold">Title</span>
                                                    <span v-text="form.options.context"></span>
                                                </div>
                                                <div
                                                    v-if="form.options && form.options.gender"
                                                    class="flex flex-col mt-4"
                                                >
                                                    <div
                                                        v-if="form.options && form.options.age"
                                                        class="p-4 border border-gray-300 rounded-md bg-gray-100 flex text-gray-600 space-x-3">
                                                        <span>Subject - </span>
                                                        <span v-text="form.options.age.id"></span>
                                                        <span>/</span>
                                                        <span v-text="form.options.gender.name"></span>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- Product info -->
                                            <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                                <!--                                                BUSINESS-->
                                                <div
                                                    v-show="form.category.name === 'Business'"
                                                    class="mt-6 flex flex-col items-center">
                                                    <h3 class="text-lg text-gray-600 font-bold">Add Context</h3>
                                                    <InputLabel for="formOptions"
                                                                value="What is your professional title?"/>
                                                    <TextInput
                                                        ref="formOptions"
                                                        v-model="form.options.context"
                                                        type="text"
                                                        class="mt-1 block w-3/4"
                                                        placeholder="Vice President Marketing"
                                                    />
                                                </div>
                                                <!--                                                SOCIAL-->
                                                <div
                                                    v-if="form.category.name === 'Social'"
                                                    class="mt-6 flex flex-col items-center">
                                                    <h3 class="text-lg text-gray-600 font-bold">How many people in this
                                                        photo?</h3>
                                                    <RadioGroup v-model="form.options.multiplePeople" class="mt-4">
                                                        <RadioGroupLabel class="sr-only"> How many people in this
                                                            photo?
                                                        </RadioGroupLabel>
                                                        <div class="flex flex-col items-center justify-center">
                                                            <RadioGroupOption as="span"
                                                                              class="px-4 py-2"
                                                                              key="one" value="one"
                                                                              @click="resetOptions"
                                                                              v-slot="{ active, checked }">
                                                                <div
                                                                    :class="[
                                                                    form.category, active && checked ? 'bg-gray-300 ring-none' : '',
                                                                    !active && checked ? 'bg-gray-300' : '', '-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none'
                                                                ]"
                                                                    class="rounded-lg p-3 border border-gray-500">
                                                                    <RadioGroupLabel as="span"
                                                                                     class="text-xl">
                                                                        <span class="uppercase">One</span>
                                                                    </RadioGroupLabel>
                                                                </div>
                                                            </RadioGroupOption>
                                                            <RadioGroupOption as="span"
                                                                              class="px-4 py-2"
                                                                              key="multiple" :value="true"
                                                                              v-slot="{ active, checked }">
                                                                <div
                                                                    :class="[
                                                                    form.category, active && checked ? 'bg-gray-300 ring-none' : '',
                                                                    !active && checked ? 'bg-gray-300' : '', '-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none'
                                                                ]"
                                                                    class="rounded-lg p-3 border border-gray-500">
                                                                    <RadioGroupLabel as="span"
                                                                                     class="text-xl">
                                                                        <span class="uppercase">Multiple</span>
                                                                    </RadioGroupLabel>
                                                                </div>
                                                            </RadioGroupOption>
                                                        </div>
                                                    </RadioGroup>
                                                    <SelectWithCheck
                                                        v-if="form.options.multiplePeople"
                                                        v-model="form.options.position"
                                                        :message="form.errors.options"
                                                        label="Choose One"
                                                        :options="[
                                                        {id: 1, name: 'The one on the left'},
                                                        {id: 2, name: 'The one in the center'},
                                                        {id: 3, name: 'The one on the right'},
                                                    ]"

                                                    />
                                                </div>
                                                <!--                                                DATING-->
                                                <div
                                                    v-if="form.category.name === 'Dating'"
                                                    class="mt-6 flex flex-col items-center w-full">
                                                    <h3 class="text-lg text-gray-600 font-bold">Who is in the
                                                        photo?</h3>
                                                    <div class="flex space-x-4 w-full">
                                                        <SelectWithCheck
                                                            class="w-full"
                                                            v-model="form.options.gender"
                                                            :message="form.errors.options"
                                                            label="Cender"
                                                            :options="[
                                                        {id: 1, name: 'Male'},
                                                        {id: 2, name: 'Female'},
                                                    ]"
                                                        />
                                                        <SelectWithCheck
                                                            v-model="form.options.age"
                                                            :message="form.errors.options"
                                                            label="Age"
                                                            :options="allowedAges"
                                                        />
                                                    </div>
                                                    <div class="mt-4">
                                                        <div class="flex flex-col space-y-4">


                                                            <SwitchGroup as="div" class="flex items-center">
                                                                <Switch v-model="form.options.multiplePeople"
                                                                        :class="[form.options.multiplePeople ? 'bg-green-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                                                                <span aria-hidden="true"
                                                                      :class="[form.options.multiplePeople ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"/>
                                                                </Switch>
                                                                <SwitchLabel as="span" class="ml-3">
                                                                    <span class="text-sm font-medium text-gray-900">This photo has multiple people</span>
                                                                </SwitchLabel>
                                                            </SwitchGroup>
                                                            <SelectWithCheck
                                                                v-if="form.options.multiplePeople"
                                                                v-model="form.options.position"
                                                                :message="form.errors.options"
                                                                label="Choose One"
                                                                :options="[
                                                        {id: 1, name: 'The one on the left'},
                                                        {id: 2, name: 'The one in the center'},
                                                        {id: 3, name: 'The one on the right'},
                                                    ]"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mt-4 flex justify-center flex-col items-center">
                                                    <button type="submit"
                                                            class="mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
                                                        Start
                                                    </button>
                                                </div>
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
                                        </div>
                                    </div>
                                </div>
                            </tab-panel>
                        </tab-panels>
                    </tab-group>
                </form>
            </div>
        </div>
    </AppLayout>
</template>


