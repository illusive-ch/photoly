<script setup>
import {computed, ref} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Footer from '@/Components/Footer.vue';
import NavBar from '@/Components/NavBar.vue';
import MobileNav from '@/Components/MobileNav.vue';

import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3CenterLeftIcon,
    Bars4Icon,
    ClockIcon,
    HomeIcon,
    XMarkIcon,
    PlusIcon,
    ChevronLeftIcon,

} from '@heroicons/vue/24/outline'
import {
    ChevronRightIcon,
    ChevronUpDownIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
    BanknotesIcon
} from '@heroicons/vue/20/solid'
import {usePage} from "@inertiajs/inertia-vue3";

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    Inertia.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    Inertia.post(route('logout'));
};

const datingNav = usePage().props.value.categories.data.find((category) => category.name === 'Dating')
const socialNav = usePage().props.value.categories.data.find((category) => category.name === 'Social')
const businessNav = usePage().props.value.categories.data.find((category) => category.name === 'Business')
const curUrl = ref(usePage().url)
const curCategory = ref(usePage().props.value.category)

const navigation = computed(() => {
    return [
        {name: 'Home', href: route('subject.mine'), icon: HomeIcon, current: curUrl.value === '/me'},
        {
            name: 'Vote For Dating',
            href: route('category.subjects.index', datingNav),
            icon: Bars4Icon,
            current: curUrl.value.startsWith('/category/' + datingNav.id)
        },
        {
            name: 'Vote For Social',
            href: route('category.subjects.index', socialNav),
            icon: Bars4Icon,
            current: curUrl.value.startsWith('/category/' + socialNav.id)
        },
        {
            name: 'Vote For Business',
            href: route('category.subjects.index', businessNav),
            icon: Bars4Icon,
            current: curUrl.value.startsWith('/category/' + businessNav.id)
        },
        {name: 'Billing', href: route('spark.portal'), icon: ClockIcon, current: false},
    ]
})

const back = () => {
    let urlPrev = usePage().props.value.urlPrev
    console.log(urlPrev)
    Inertia.visit(urlPrev)
}

</script>

<template>
    <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <div class="min-h-full">

        <!-- Static sidebar for desktop -->
        <div
            class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:shadow-xl lg:pt-5 lg:pb-4">
            <div class="flex flex-shrink-0 items-center px-6">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
                     alt="Your Company"/>
            </div>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
                <!-- User account dropdown -->
                <Menu as="div" class="relative inline-block px-3 text-left">
                    <div>
                        <MenuButton
                            class="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-wild-watermelon focus:ring-offset-2 focus:ring-offset-gray-100">
              <span class="flex w-full items-center justify-between">
                <span class="flex min-w-0 items-center justify-between space-x-3">
                  <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                       src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                       alt=""/>
                  <span class="flex min-w-0 flex-1 flex-col">
                    <span class="truncate text-sm font-medium text-gray-900" v-text="$page.props.user.name"></span>
                    <span class="truncate text-sm text-gray-500" v-text="$page.props.user.email"></span>
                  </span>
                </span>
                <ChevronUpDownIcon class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                   aria-hidden="true"/>
              </span>
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <a href="#"
                                       :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View
                                        profile</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <Link :href="route('profile.show')"
                                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                                        Settings
                                    </Link>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#"
                                       :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
                                </MenuItem>
                            </div>
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <a href="#"
                                       :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get
                                        desktop app</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#"
                                       :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                                </MenuItem>
                            </div>
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <Link method="post" as="button" :href="route('logout')"
                                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm w-full text-left']">
                                        Logout
                                    </Link>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>

                <!-- Navigation -->
                <nav class="mt-6 px-3">
                    <div class="space-y-1">
                        <Link v-for="item in navigation" :key="item.name" :href="item.href"
                              :class="[item.current ? 'bg-black text-white' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
                              :aria-current="item.current ? 'page' : undefined">
                            <component :is="item.icon"
                                       :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                                       aria-hidden="true"/>
                            {{ item.name }}
                        </Link>
                    </div>
                    <div class="mt-8 relative flex justify-center group">
                        <!-- Secondary navigation -->
                        <div
                            class="absolute -inset-px group-hover:inset-1 primary-gradient rounded-full blur"></div>
                        <Link
                            :href="route('category.subjects.create', curCategory ?? datingNav)"
                            class="uppercase relative inline-flex gap-2 items-center rounded-full primary-gradient px-8 py-3 text-base font-medium text-white">
                            <PlusIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                            Upload Photo
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
        <!-- Main column -->
        <div class="flex flex-col lg:pl-64">
            <!-- Search header -->
            <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white lg:hidden flex justify-between">
                <button type="button"
                        class="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wild-watermelon lg:hidden"
                        @click="back">
                    <span class="sr-only">Open sidebar</span>
                    <ChevronLeftIcon class="h-6 w-6" aria-hidden="true"/>
                </button>
                <div class="flex justify-between px-4 sm:px-6 lg:px-8">
                    <div class="mt-4 flex items-center gap-2 sm:mt-0 sm:ml-4">
                        <div class="relative flex justify-center group">
                            <!-- Secondary navigation -->
                            <div
                                class="absolute -inset-px group-hover:inset-1 primary-gradient rounded-full blur"></div>
                            <Link
                                :href="route('credit.index')"
                                class="uppercase relative inline-flex gap-2 items-center rounded-full primary-gradient p-1 text-base font-medium text-white">
                                <PlusIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                                <span class="hidden lg:block">Get Credits</span>
                            </Link>
                        </div>
                        <div>
                            <span
                                class="text-2xl inline-flex items-center justify-center gap-2 py-1 px-2 bg-white text-black">
                                {{ $page.props.credits }}
                                <BanknotesIcon class="w-6 h-6 fill-wild-watermelon"/>
                            </span>
                        </div>
                    </div>
                    <!--                    <div class="flex items-center">-->
                    <!--                        &lt;!&ndash; Profile dropdown &ndash;&gt;-->
                    <!--                        <Menu as="div" class="relative ml-3">-->
                    <!--                            <div>-->
                    <!--                                <MenuButton-->
                    <!--                                    class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-wild-watermelon focus:ring-offset-2">-->
                    <!--                                    <span class="sr-only">Open user menu</span>-->
                    <!--                                    <img class="h-8 w-8 rounded-full"-->
                    <!--                                         src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"-->
                    <!--                                         alt=""/>-->
                    <!--                                </MenuButton>-->
                    <!--                            </div>-->
                    <!--                            <transition enter-active-class="transition ease-out duration-100"-->
                    <!--                                        enter-from-class="transform opacity-0 scale-95"-->
                    <!--                                        enter-to-class="transform opacity-100 scale-100"-->
                    <!--                                        leave-active-class="transition ease-in duration-75"-->
                    <!--                                        leave-from-class="transform opacity-100 scale-100"-->
                    <!--                                        leave-to-class="transform opacity-0 scale-95">-->
                    <!--                                <MenuItems-->
                    <!--                                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">-->
                    <!--                                    <div class="py-1">-->
                    <!--                                        <MenuItem v-slot="{ active }">-->
                    <!--                                            <a href="#"-->
                    <!--                                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View-->
                    <!--                                                profile</a>-->
                    <!--                                        </MenuItem>-->
                    <!--                                        <MenuItem v-slot="{ active }">-->
                    <!--                                            <a href="#"-->
                    <!--                                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>-->
                    <!--                                        </MenuItem>-->
                    <!--                                        <MenuItem v-slot="{ active }">-->
                    <!--                                            <a href="#"-->
                    <!--                                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>-->
                    <!--                                        </MenuItem>-->
                    <!--                                    </div>-->
                    <!--                                    <div class="py-1">-->
                    <!--                                        <MenuItem v-slot="{ active }">-->
                    <!--                                            <a href="#"-->
                    <!--                                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get-->
                    <!--                                                desktop app</a>-->
                    <!--                                        </MenuItem>-->
                    <!--                                        <MenuItem v-slot="{ active }">-->
                    <!--                                            <a href="#"-->
                    <!--                                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>-->
                    <!--                                        </MenuItem>-->
                    <!--                                    </div>-->
                    <!--                                    <div class="py-1">-->
                    <!--                                        <MenuItem v-slot="{ active }">-->
                    <!--                                            <a href="#"-->
                    <!--                                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>-->
                    <!--                                        </MenuItem>-->
                    <!--                                    </div>-->
                    <!--                                </MenuItems>-->
                    <!--                            </transition>-->
                    <!--                        </Menu>-->
                    <!--                    </div>-->
                </div>
            </div>
            <main class="flex-1">
                <header v-if="$slots.header"
                        class="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 lg:mb-10">
                    <div class="min-w-0 flex-1">
                        <slot name="header"/>
                    </div>
                    <div class="hidden lg:flex mt-4  items-center gap-2 sm:mt-0 sm:ml-4">
                        <div class="relative flex justify-center group">
                            <!-- Secondary navigation -->
                            <div
                                class="absolute -inset-px group-hover:inset-1 primary-gradient rounded-full blur"></div>
                            <Link
                                :href="route('credit.index')"
                                class="uppercase relative inline-flex gap-2 items-center rounded-full primary-gradient px-6 py-2 text-base font-medium text-white">
                                <PlusIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                                Get Credits
                            </Link>
                        </div>
                        <div>
                            <span
                                class="text-2xl inline-flex items-center justify-center gap-2 py-1 px-2 bg-white rounded-full text-black">
                                                                {{ $page.props.credits }}
                                <BanknotesIcon class="w-8 h-8 fill-wild-watermelon"/>
                            </span>
                        </div>
                    </div>
                </header>
                <slot/>
            </main>

        </div>
    </div>
</template>
