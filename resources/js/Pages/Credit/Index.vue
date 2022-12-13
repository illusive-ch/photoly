<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {useForm} from '@inertiajs/inertia-vue3'
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, TransitionRoot} from '@headlessui/vue'
import {ArrowPathIcon, HandThumbUpIcon} from '@heroicons/vue/24/outline'
import {computed, ref, watch} from 'vue';
import {CheckIcon, ChevronDownIcon} from '@heroicons/vue/20/solid'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {usePage, Link} from '@inertiajs/inertia-vue3'
import {VueReCaptcha, useReCaptcha} from 'vue-recaptcha-v3'
import {TabGroup, TabList, Tab, TabPanels, TabPanel} from '@headlessui/vue'

const props = defineProps({
    packages: Object,
});


</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <!-- Page title & actions -->
            <div class="hidden lg:block">
                <h1 class="text-3xl font-medium text-gray-900 sm:truncate">Get Credits</h1>
                <span class="text-base text-gray-500">Run out? Get one time credits here!</span>
            </div>
        </template>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="">
                    <ul role="list" class="-my-5 divide-y divide-gray-200">
                        <li v-for="plan in packages" :key="plan.name" class="py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <!--                                    <img class="h-8 w-8 rounded-full" :src="person.imageUrl" alt=""/>-->
                                </div>
                                <div class="min-w-0 flex-1">
                                    <p class="truncate text-sm font-medium text-gray-900">{{ plan.name }}</p>
                                    <p class="truncate text-sm text-gray-500">{{ '@' + plan.price }}</p>
                                </div>
                                <div>
                                    <Link
                                        :href="route('credit.store')"
                                        method="post"
                                        :data="{ plan: plan.name }"
                                        class="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50">
                                        Buy
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </AppLayout>
</template>


