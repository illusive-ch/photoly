<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {useForm, usePage} from "@inertiajs/inertia-vue3";
import {Link} from '@inertiajs/inertia-vue3'
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Switch,
    SwitchGroup,
    SwitchLabel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from '@headlessui/vue'
import {BanknotesIcon} from '@heroicons/vue/20/solid'
import {computed, ref} from 'vue'
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import SelectWithCheck from '@/Components/SelectWithCheck.vue';
import {MediaLibraryAttachment} from '@spatie/media-library-pro-vue3-attachment';
import MultiRangeSlider from "multi-range-slider-vue";
import TestSize from "@/Components/TestSize.vue"


const props = defineProps({
    media: Object,
    categories: Object,
    balance: Number,
    category: Object,
});

const barMin = ref(18)
const barMax = ref(100)
const barMinValue = ref(18)
const barMaxValue = ref(100)

const UpdateValues = (e) => {
    barMinValue.value = e.minValue;
    barMaxValue.value = e.maxValue;
    form.target.minAge = e.minValue;
    form.target.maxAge = e.maxValue;
}
const selectedTab = ref(0)

const tabs = [
    {name: 'Continue', selected: true},
    {name: 'Continue', selected: false},
    {name: 'Continue', selected: false},
    {name: 'Continue', selected: false},
    {name: 'Get Credits', selected: false},
]

const genderCost = 2
const ageCost = 2
const who = [
    {name: 'Both', cost: 0, selected: false},
    {name: 'Male', cost: genderCost, selected: false},
    {name: 'Female', cost: genderCost, selected: false}
]
const pricing = [
    {
        name: 'Karma',
        description: 'Lorem ipsum dolor, sit amet, consectetur',
        amount: 0,
        cost: 0,
        selected: false,
        color: 'bg-gray-100',
        highlightColor: 'bg-gray-200'
    },
    {
        name: 'Rough',
        description: 'Lorem ipsum dolor, sit amet, consectetur',
        amount: 30,
        cost: 10,
        selected: false,
        color: 'bg-green-100',
        highlightColor: 'bg-green-200'
    },
    {
        name: 'Standard',
        description: 'Lorem ipsum dolor, sit amet, consectetur',
        amount: 30,
        cost: 20,
        selected: false,
        color: 'bg-blue-100',
        highlightColor: 'bg-blue-200'
    },
    {
        name: 'Precise',
        description: 'Lorem ipsum dolor, sit amet, consectetur',
        amount: 30,
        cost: 30,
        selected: false,
        color: 'bg-purple-200',
        highlightColor: 'bg-purple-300'
    },
    {
        name: 'Exact',
        description: 'Lorem ipsum dolor, sit amet, consectetur',
        amount: 30,
        cost: 40,
        selected: false,
        color: 'bg-cream-brulee-400',
        highlightColor: 'bg-cream-brulee-500'
    }
]

const form = useForm({
    _method: 'POST',
    media: null,
    upload: false,
    target: {
        minAge: 18,
        maxAge: 100,
        gender: 'Both'
    },
    category: props.category,
    plan: {
        name: null
    },
    position: {},
    options: {},
});


const onUpload = (subject) => {
    form.upload = true
    form.media = subject
}
const changeTab = (index) => {
    resetOptions()
    selectedTab.value = index
}

const resetOptions = () => {
    console.log('resetting')
    form.options = {}
}

const testMedia = computed(() => {
    if (form.media === null) {
        return null
    }
    if (form.media.url) {
        return form.media.url
    }
    const firstValue = Object.values(form.media)[0];
    if (firstValue.preview_url) {
        return firstValue.preview_url
    }
    return false
})

const targetTotal = computed(() => {
    let total = 0
    if (form.target.minAge !== 18 || form.target.maxAge !== 100) {
        total = total + genderCost
    }
    if (form.target.gender !== 'Both') {
        total = total + ageCost
    }
    return total
})
const planAmount = computed(() => {
    if (form.plan.name !== null) {
        return form.plan.cost
    }
    return 0
})
const creditCount = computed(() => {
    return targetTotal.value + planAmount.value
})
const percentageCompleted = computed(() => {
    const panelCount = 4
    return ((parseInt(selectedTab.value) + 1) / panelCount) * 100
})

</script>

<template>
    <AppLayout title="Profile">
        <template #header>
        </template>
        <div class="mx-auto max-w-2xl">
            <div class="bg-white rounded-md p-4">
                <form @submit.prevent="form.post(route('category.subjects.store', form.category.id))">
                    <div class="w-full bg-gray-200 rounded-full">
                        <div
                            class="scale-y-175 bg-gray-900   py-0.5 text-xs font-medium leading-none rounded-full {{color}}"
                            :style="{width: percentageCompleted +'%'}">
                        </div>
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
                    <tab-group :defaultIndex="0" :selectedIndex="selectedTab" @change="changeTab">
                        <tab-panels class="pb-4 mt-8">
                            <tab-panel v-slot="{selected}">
                                <h2 class="font-bold text-2xl text-center mb-2">Upload Photo</h2>
                                <media-library-attachment
                                    :max-items="1"
                                    name="subject"
                                    :initial-value="subject"
                                    @change="onUpload"
                                />
                            </tab-panel>
                            <tab-panel>
                                <div class="">
                                    <div class="mx-auto max-w-2xl lg:max-w-none">
                                        <!-- Product -->

                                        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">

                                            <div class="aspect-square rounded-lg overflow-hidden">
                                                <img v-if="testMedia" :src="testMedia" alt="content_images"
                                                     class="object-cover w-full h-full">
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
                                                    <div class="">
                                                        <div
                                                            class="flex flex-col space-y-4 rounded-xl bg-[#F1F9FF] p-4">
                                                            <SwitchGroup as="div"
                                                                         class="flex justify-between space-x-8">
                                                                <SwitchLabel as="span" class="">
                                                                    <span class="text-base font-medium text-gray-900">Multiple People</span>
                                                                </SwitchLabel>
                                                                <Switch v-model="form.options.multiplePeople"
                                                                        :class="[form.options.multiplePeople ? 'bg-wild-watermelon' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out']">
                                                                <span aria-hidden="true"
                                                                      :class="[form.options.multiplePeople ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"/>
                                                                </Switch>
                                                            </SwitchGroup>
                                                            <SelectWithCheck
                                                                v-if="form.options.multiplePeople"
                                                                v-model="form.position"
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
                                                <!--                                                DATING-->
                                                <div
                                                    v-if="form.category.name === 'Dating'"
                                                    class="mt-6 flex flex-col items-center w-full">
                                                    <div class="">
                                                        <div
                                                            class="flex flex-col space-y-4 rounded-xl bg-[#F1F9FF] p-4">
                                                            <SwitchGroup as="div"
                                                                         class="flex justify-between space-x-8">
                                                                <SwitchLabel as="span" class="">
                                                                    <span class="text-base font-medium text-gray-900">Multiple People</span>
                                                                </SwitchLabel>
                                                                <Switch v-model="form.options.multiplePeople"
                                                                        :class="[form.options.multiplePeople ? 'bg-wild-watermelon' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out']">
                                                                <span aria-hidden="true"
                                                                      :class="[form.options.multiplePeople ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"/>
                                                                </Switch>
                                                            </SwitchGroup>
                                                            <SelectWithCheck
                                                                v-if="form.options.multiplePeople"
                                                                v-model="form.position"
                                                                :message="errors.position"
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel>
                                <h2 class="font-bold text-2xl text-center mb-2">Who can Vote on it?</h2>
                                <RadioGroup class=""
                                            v-model="form.target.gender">
                                    <RadioGroupLabel class="sr-only">Who Can vote</RadioGroupLabel>
                                    <div class="grid grid-cols-3 gap-4">
                                        <RadioGroupOption as="template"
                                                          v-for="gender in who"
                                                          :key="gender.name"
                                                          :value="gender.name"
                                                          v-slot="{ checked }"
                                        >
                                            <div
                                                :class="checked ? 'primary-gradient text-white border-wild-watermelon' : 'bg-blue-50 border-gray-300'"
                                                class="p-4 rounded-lg border cursor-pointer">
                                                <div class="text-center flex flex-col">
                                                    <span v-text="gender.name"></span>
                                                    <span
                                                        class="mt-2 inline-flex items-center justify-center gap-2 py-1 px-2 bg-white rounded-full text-black">
                                                                {{ gender.cost }}
                                                                <BanknotesIcon class="w-4 h-4 fill-wild-watermelon"/>
                                                            </span>
                                                </div>
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                                <div class="mt-16">
                                    <h2 class="font-bold text-base text-center mb-2">Age Range</h2>
                                    <p class="text-sm text-gray-500 text-center mb-2">If you select an age range
                                        it will cost {{ ageCost }} credits</p>
                                    <div class="multi-range-slider-container">
                                        <MultiRangeSlider
                                            baseClassName="multi-range-slider-wild"
                                            :min="barMin"
                                            :max="barMax"
                                            :step="1"
                                            :ruler="false"
                                            :label="false"
                                            :minValue="barMinValue"
                                            :maxValue="barMaxValue"
                                            @input="UpdateValues"
                                        />
                                    </div>
                                    <div class="bg-blue-50 rounded-full p-4 text-center">
                                        <span class="inline-flex items-center justify-center gap-2 text-[#747474]">
                                            Requires: <span class="text-gray-900">{{ creditCount }}</span>
                                            <BanknotesIcon class="w-4 h-4 fill-wild-watermelon"/>
                                        </span>
                                    </div>
                                </div>

                            </tab-panel>
                            <tab-panel>
                                <h2 class="font-bold text-2xl text-center mb-2">Choose Test Size</h2>
                                <RadioGroup class="flex flex-col gap-4" v-model="form.plan">
                                    <RadioGroupLabel class="sr-only">Plan</RadioGroupLabel>
                                    <div v-for="(price,index) in pricing">
                                        <RadioGroupOption as="span"
                                                          :key="price.name"
                                                          :value="price"
                                                          v-slot="{ active, checked }">
                                            <TestSize
                                                :title="price.name"
                                                :description="price.description"
                                                :color="price.color"
                                                :highlightColor="price.highlightColor"
                                                :amount="price.amount"
                                                :cost="price.cost"
                                                :selected="checked"
                                                :total="targetTotal"
                                            />
                                        </RadioGroupOption>
                                        <div v-if="index === 0" class="relative mt-2">
                                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                                <div class="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div class="relative flex justify-center text-sm">
                                                <span class="bg-white px-2 text-gray-500">Or</span>
                                            </div>
                                        </div>
                                    </div>
                                </RadioGroup>
                                <div class="mt-4 text-center">
                                    <span class="text-gray-500 text-sm">Your Balance:
                                        <span class="text-gray-900 inline-flex items-center gap-1">
                                        {{ balance }}
                                        <BanknotesIcon class="w-4 h-4 fill-wild-watermelon"/>
                                        </span>
                                    </span>
                                </div>
                                <div class="flex items-center mt-4">
                                    <div v-if="selectedTab === 3" class="relative max-w-xl mx-auto">
                                        <div
                                            class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                        <Link
                                            v-if="creditCount > balance"
                                            :href="route('spark.portal')"
                                            class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                            Get Credits
                                        </Link>
                                        <button
                                            v-if="creditCount <= balance"
                                            type="submit" :disabled="form.processing"
                                            class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </tab-panel>
                        </tab-panels>
                        <tab-list class="text-center">
                            <Tab>
                            </Tab>
                            <Tab :disabled="!form.media">
                                <div v-if="selectedTab === 0 && form.media" class="relative max-w-xl mx-auto">
                                    <div
                                        class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                    <button type="button"
                                            class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                        Continue
                                    </button>
                                </div>
                            </Tab>
                            <Tab>
                                <div v-if="selectedTab === 1" class="relative max-w-xl mx-auto">
                                    <div
                                        class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                    <button type="button"
                                            class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                        Continue
                                    </button>
                                </div>
                            </Tab>
                            <Tab>
                                <div v-if="selectedTab === 2" class="relative max-w-xl mx-auto">
                                    <div
                                        class="absolute -inset-0.5 primary-gradient rounded-full blur"></div>
                                    <button type="button"
                                            class="uppercase relative inline-flex items-center rounded-full primary-gradient px-24 py-3 text-base font-medium text-white">
                                        Continue
                                    </button>
                                </div>
                            </Tab>
                        </tab-list>
                    </tab-group>
                </form>
            </div>
        </div>
    </AppLayout>
</template>


