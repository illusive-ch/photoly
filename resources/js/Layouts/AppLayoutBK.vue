<script setup>
import {ref} from 'vue';
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
</script>

<template>
    <div>
        <Head :title="title"/>

        <Banner/>

        <div class="min-h-screen bg-white">
            <!--            <NavBar></NavBar>-->

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white">
                <div class="mt-4">
                    <div class="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <slot name="header"/>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <header v-if="$slots.header"
                        class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div class="min-w-0 flex-1">
                        <slot name="header"/>
                    </div>
                    <div class="mt-4 flex sm:mt-0 sm:ml-4">
                        <button type="button"
                                class="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0">
                            Share
                        </button>
                        <button type="button"
                                class="order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3">
                            Create
                        </button>
                    </div>
                </header>
                <slot/>
            </main>

            <Footer/>
        </div>
    </div>
</template>
