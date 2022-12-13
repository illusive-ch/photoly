<script setup>
import {ref} from 'vue'
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {
    Bars3Icon,
    DocumentDuplicateIcon,
    PhotoIcon,
    PlusIcon,
    BellIcon,
    CogIcon,
    HeartIcon,
    ChartBarIcon
} from '@heroicons/vue/24/outline'
import NavLink from '@/Components/NavLink.vue';
import {Link, usePage} from '@inertiajs/inertia-vue3'
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {
    ArrowLeftOnRectangleIcon,
    Bars3BottomLeftIcon,
    BriefcaseIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    DocumentMagnifyingGlassIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import {MagnifyingGlassIcon} from '@heroicons/vue/20/solid'


const open = ref(false)
const automaticTimezoneEnabled = ref(true)
const autoUpdateApplicantDataEnabled = ref(false)
const categoriesVoteOpen = ref(false)
const categoriesCreateOpen = ref(false)
const catType = ref('index')
const categories = usePage().props.value.categories.data
</script>

<template>
    <div class="w-full h-screen">
        <section id="bottom-navigation relative"
                 class="md:hidden block fixed inset-x-0 bottom-3 mx-2 rounded-lg z-10">
            <div id="tabs" class="flex flex-col justify-around">
                <TransitionRoot
                    :show="categoriesVoteOpen"
                    enter="duration-200"
                    enter-to="animate__animated animate__fadeInUp"
                    leave="duration-200"
                    leave-to="animate__animated animate__fadeOutDown"
                >
                    <div class="bg-gray-150 z-10 flex justify-around text-gray-500 py-2">
                        <template v-for="cat in categories">
                            <Link
                                :href="route('category.subjects.index', cat.id)"
                                class="focus:text-wild-watermelon hover:text-wild-watermelon justify-center inline-block text-center pt-2 pb-1"
                            >{{ cat.name }}
                            </Link>
                        </template>
                    </div>
                </TransitionRoot>
                <TransitionRoot
                    :show="categoriesCreateOpen"
                    enter="duration-200"
                    enter-to="animate__animated animate__fadeInUp"
                    leave="duration-200"
                    leave-to="animate__animated animate__fadeOutDown"
                >
                    <div class="bg-gray-150 z-10 flex justify-around text-gray-500 py-2">
                        <template v-for="cat in categories">
                            <Link
                                :href="route('category.subjects.create', cat.id)"
                                class="focus:text-wild-watermelon hover:text-wild-watermelon justify-center inline-block text-center pt-2 pb-1"
                            >{{ cat.name }}
                            </Link>
                        </template>
                    </div>
                </TransitionRoot>
                <div class="flex justify-around bg-gray-150 z-20">
                    <Link
                        :href="route('subject.mine')"
                        class="focus:text-wild-watermelon hover:text-wild-watermelon justify-center inline-block text-center pt-2 pb-1">
                        <ChartBarIcon class="w-8 h-8 text-gray-400"/>
                    </Link>
                    <button
                        @click="categoriesVoteOpen = false; categoriesCreateOpen = !categoriesCreateOpen"
                        class="focus:text-wild-watermelon hover:text-wild-watermelon justify-center inline-block text-center pt-2 pb-1">
                        <PhotoIcon class="w-8 h-8 text-gray-800"/>
                    </button>
                    <div
                        @click="categoriesCreateOpen = false; categoriesVoteOpen = !categoriesVoteOpen"
                        class="scale-110 relative">
                        <div
                            class="absolute -inset-0.5 bg-gradient-to-r from-salmon to-wild-watermelon rounded-full blur"></div>
                        <button type="button"
                                class="relative inline-flex items-center rounded-full bg-gradient-to-r from-salmon to-wild-watermelon p-1.5 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <HeartIcon class="w-10 h-10 text-white"/>
                        </button>
                    </div>
                    <a href="#"
                       class="focus:text-wild-watermelon hover:text-wild-watermelon justify-center inline-block text-center pt-2 pb-1">
                        <BellIcon class="w-8 h-8 text-gray-400"/>
                    </a>
                    <Link :href="route('profile.show')"
                          class="focus:text-wild-watermelon hover:text-wild-watermelon justify-center inline-block text-center pt-2 pb-1">
                        <CogIcon class="w-8 h-8 text-gray-400"/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
</template>
