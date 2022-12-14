<script setup>
import {ref} from 'vue'
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {Bars3Icon} from '@heroicons/vue/24/outline'
import NavLink from '@/Components/NavLink.vue';
import {Link} from '@inertiajs/inertia-vue3'
import {
    ArrowLeftOnRectangleIcon,
    Bars3BottomLeftIcon,
    BellIcon,
    BriefcaseIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    CogIcon,
    DocumentMagnifyingGlassIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import {MagnifyingGlassIcon} from '@heroicons/vue/20/solid'

const navigation = [
    {title: 'Home', route: route('home'), active: route().current('home'), icon: HomeIcon},
    {
        title: 'My tests',
        route: route('subject.mine'),
        active: route().current('subject.mine'),
        icon: DocumentMagnifyingGlassIcon
    },
    {
        title: 'Create Test',
        route: route('category.subjects.create', 1),
        active: route().current('category.subjects.create', 1),
        icon: ChatBubbleOvalLeftEllipsisIcon
    },
    {
        title: 'Vote',
        route: route('category.subjects.index', 1),
        active: route().current('category.subjects.index', 1),
        icon: UsersIcon
    },
    {
        title: 'Billing',
        route: route('credit.index'),
        active: route().current('credit.index'),
        icon: CogIcon
    },
]

const secondaryNavigation = [
    {name: 'Help', href: '#', icon: QuestionMarkCircleIcon},
    {name: 'Logout', href: '#', icon: ArrowLeftOnRectangleIcon},
]

const open = ref(false)
const automaticTimezoneEnabled = ref(true)
const autoUpdateApplicantDataEnabled = ref(false)
</script>

<template>
    <div class="sticky">
        <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex px-2 lg:px-0">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="block h-8 w-auto lg:hidden"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                 alt="Your Company"/>
                            <img class="hidden h-8 w-auto lg:block"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                 alt="Your Company"/>
                        </div>
                        <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
                            <NavLink v-for="item in navigation" :key="item.title"
                                     :href="item.route"
                                     :active="item.active">
                                {{ item.title }}
                            </NavLink>
                        </div>
                    </div>
                    <div class="flex items-center lg:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
                        </DisclosureButton>
                    </div>
                    <div class="hidden lg:ml-4 lg:flex lg:items-center">
                        <!-- Team Management -->
                        <Menu v-if="$page.props.jetstream.hasTeamFeatures && $page.props.user"
                              as="div" class="relative ml-4 flex-shrink-0">
                            <div>
                                <MenuButton class="flex items-center mr-4">
                                    {{ $page.props.user.current_team.name }}
                                    <svg
                                        class="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fill-rule="evenodd"
                                              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </MenuButton>
                            </div>
                            <transition enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95">

                                <!-- Team Settings -->
                                <MenuItems
                                    class="absolute right-0 z-20 mt-2 w-48 origin-top rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem v-slot="{ active }">
                                        <Link :href="route('teams.show', $page.props.user.current_team)"
                                              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                              :active="route().current('teams.show')">
                                            Team Settings
                                        </Link>
                                    </MenuItem>

                                    <MenuItem v-slot="{ active }">
                                        <Link v-if="$page.props.jetstream.canCreateTeams"
                                              :href="route('teams.create')"
                                              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                              :active="route().current('teams.create')">
                                            Create New Team
                                        </Link>
                                    </MenuItem>
                                    <!-- Team Switcher -->
                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                        Switch Teams
                                    </div>
                                    <MenuItem v-for="team in $page.props.user.all_teams" :key="team.id"
                                              v-slot="{ active }">
                                        <form @submit.prevent="switchToTeam(team)">
                                            <Link as="button">
                                                <div
                                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                                    class="flex items-center">
                                                    <svg
                                                        v-if="team.id == $page.props.user.current_team_id"
                                                        class="mr-2 h-5 w-5 text-green-400"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <div>{{ team.name }}</div>
                                                </div>
                                            </Link>
                                        </form>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                        <button
                            v-if="$page.props.user"
                            type="button"
                            class="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true"/>
                        </button>

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative ml-4 flex-shrink-0" v-if="$page.props.user">
                            <div>
                                <MenuButton
                                    class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt=""/>
                                </MenuButton>
                            </div>
                            <transition enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem v-slot="{ active }">
                                        <Link
                                            :href="route('profile.show')"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                            method="post" type="button">
                                            Settings
                                        </Link>
                                    </MenuItem>
                                    <MenuItem class="z-20" v-slot="{ active }">
                                        <Link
                                            :href="route('logout')"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                            method="post" as="button" type="button">
                                            Sign Out
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="lg:hidden" v-slot="{ close }">
                <TransitionRoot as="template" :show="open">
                    <Dialog as="div" class="relative z-40 md:hidden" @close="close()">
                        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                                         enter-from="opacity-0" enter-to="opacity-100"
                                         leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                                         leave-to="opacity-0">
                            <div class="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                        </TransitionChild>

                        <div class="fixed inset-0 z-40 flex">
                            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                             enter-from="-translate-x-full" enter-to="translate-x-0"
                                             leave="transition ease-in-out duration-300 transform"
                                             leave-from="translate-x-0"
                                             leave-to="-translate-x-full">
                                <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                                    <TransitionChild as="template" enter="ease-in-out duration-300"
                                                     enter-from="opacity-0"
                                                     enter-to="opacity-100" leave="ease-in-out duration-300"
                                                     leave-from="opacity-100" leave-to="opacity-0">
                                        <div class="absolute top-0 right-0 -mr-14 p-1">
                                            <button type="button"
                                                    class="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none"
                                                    @click="close()">
                                                <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                                                <span class="sr-only">Close sidebar</span>
                                            </button>
                                        </div>
                                    </TransitionChild>
                                    <div class="flex flex-shrink-0 items-center px-4">
                                        <img class="h-8 w-auto"
                                             src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
                                             alt="Easywire"/>
                                    </div>
                                    <div class="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav class="flex h-full flex-col">
                                            <div class="space-y-1 grid grid-cols-1">
                                                <NavLink v-for="item in navigation" :key="item.title"
                                                         :href="item.route"
                                                         :active="item.active">
                                                    <component :is="item.icon"
                                                               :class="[item.active ? 'text-primary-color-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']"
                                                               aria-hidden="true"/>
                                                    {{ item.title }}
                                                </NavLink>
                                            </div>
                                            <div class="mt-auto space-y-1 pt-10">
                                                <a v-for="item in secondaryNavigation" :key="item.title"
                                                   :href="item.href"
                                                   class="group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                                    <component :is="item.icon"
                                                               class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                               aria-hidden="true"/>
                                                    {{ item.title }}
                                                </a>
                                            </div>
                                        </nav>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                            <div class="w-14 flex-shrink-0" aria-hidden="true">
                                <!-- Dummy element to force sidebar to shrink to fit close icon -->
                            </div>
                        </div>
                    </Dialog>
                </TransitionRoot>
            </DisclosurePanel>
        </Disclosure>

    </div>
</template>
