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
            <!--            <nav class="bg-white border-b border-gray-100">-->
            <!--                &lt;!&ndash; Primary Navigation Menu &ndash;&gt;-->
            <!--                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">-->
            <!--                    <div class="flex justify-between h-16">-->
            <!--                        <div class="flex">-->
            <!--                            &lt;!&ndash; Logo &ndash;&gt;-->
            <!--                            <div class="shrink-0 flex items-center">-->
            <!--                                <Link :href="route('dashboard')">-->
            <!--                                    <ApplicationMark class="block h-9 w-auto"/>-->
            <!--                                </Link>-->
            <!--                                <Link :href="route('category.subjects.create', 1)">-->
            <!--                                    <ApplicationMark class="block h-9 w-auto"/>-->
            <!--                                </Link>-->
            <!--                            </div>-->

            <!--                            &lt;!&ndash; Navigation Links &ndash;&gt;-->
            <!--                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">-->
            <!--                                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">-->
            <!--                                    Dashboard-->
            <!--                                </NavLink>-->
            <!--                                <NavLink :href="route('subject.mine')"-->
            <!--                                         :active="route().current('subject.mine')">-->
            <!--                                    My tests-->
            <!--                                </NavLink>-->
            <!--                                <NavLink :href="route('category.subjects.create', 1)"-->
            <!--                                         :active="route().current('category.subjects.create')">-->
            <!--                                    Create Test-->
            <!--                                </NavLink>-->
            <!--                                <NavLink :href="route('category.subjects.index', 1)"-->
            <!--                                         :active="route().current('category.subjects.index')">-->
            <!--                                    Vote-->
            <!--                                </NavLink>-->
            <!--                                <NavLink :href="route('spark.portal')"-->
            <!--                                         :active="route().current('spark.portal')">-->
            <!--                                    Billing-->
            <!--                                </NavLink>-->
            <!--                            </div>-->
            <!--                        </div>-->

            <!--                        <div class="hidden sm:flex sm:items-center sm:ml-6">-->
            <!--                            <div class="ml-3 relative">-->
            <!--                                &lt;!&ndash; Teams Dropdown &ndash;&gt;-->
            <!--                                <Dropdown v-if="$page.props.jetstream.hasTeamFeatures" align="right" width="60">-->
            <!--                                    <template #trigger>-->
            <!--                                                    <span class="inline-flex rounded-md">-->
            <!--                                                        <button type="button"-->
            <!--                                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition">-->
            <!--                                                            {{ $page.props.user.current_team.name }}-->
            <!--                                                            <svg-->
            <!--                                                                class="ml-2 -mr-0.5 h-4 w-4"-->
            <!--                                                                xmlns="http://www.w3.org/2000/svg"-->
            <!--                                                                viewBox="0 0 20 20"-->
            <!--                                                                fill="currentColor"-->
            <!--                                                            >-->
            <!--                                                                <path fill-rule="evenodd"-->
            <!--                                                                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"-->
            <!--                                                                      clip-rule="evenodd"/>-->
            <!--                                                            </svg>-->
            <!--                                                        </button>-->
            <!--                                                    </span>-->
            <!--                                    </template>-->

            <!--                                    <template #content>-->
            <!--                                        <div class="w-60">-->
            <!--                                            &lt;!&ndash; Team Management &ndash;&gt;-->
            <!--                                            <template v-if="$page.props.jetstream.hasTeamFeatures">-->
            <!--                                                <div class="block px-4 py-2 text-xs text-gray-400">-->
            <!--                                                    Manage Team-->
            <!--                                                </div>-->

            <!--                                                &lt;!&ndash; Team Settings &ndash;&gt;-->
            <!--                                                <DropdownLink-->
            <!--                                                    :href="route('teams.show', $page.props.user.current_team)">-->
            <!--                                                    Team Settings-->
            <!--                                                </DropdownLink>-->

            <!--                                                <DropdownLink v-if="$page.props.jetstream.canCreateTeams"-->
            <!--                                                              :href="route('teams.create')">-->
            <!--                                                    Create New Team-->
            <!--                                                </DropdownLink>-->

            <!--                                                <div class="border-t border-gray-100"/>-->

            <!--                                                &lt;!&ndash; Team Switcher &ndash;&gt;-->
            <!--                                                <div class="block px-4 py-2 text-xs text-gray-400">-->
            <!--                                                    Switch Teams-->
            <!--                                                </div>-->

            <!--                                                <template v-for="team in $page.props.user.all_teams" :key="team.id">-->
            <!--                                                    <form @submit.prevent="switchToTeam(team)">-->
            <!--                                                        <DropdownLink as="button">-->
            <!--                                                            <div class="flex items-center">-->
            <!--                                                                <svg-->
            <!--                                                                    v-if="team.id == $page.props.user.current_team_id"-->
            <!--                                                                    class="mr-2 h-5 w-5 text-green-400"-->
            <!--                                                                    fill="none"-->
            <!--                                                                    stroke-linecap="round"-->
            <!--                                                                    stroke-linejoin="round"-->
            <!--                                                                    stroke-width="2"-->
            <!--                                                                    stroke="currentColor"-->
            <!--                                                                    viewBox="0 0 24 24"-->
            <!--                                                                >-->
            <!--                                                                    <path-->
            <!--                                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>-->
            <!--                                                                </svg>-->
            <!--                                                                <div>{{ team.name }}</div>-->
            <!--                                                            </div>-->
            <!--                                                        </DropdownLink>-->
            <!--                                                    </form>-->
            <!--                                                </template>-->
            <!--                                            </template>-->
            <!--                                        </div>-->
            <!--                                    </template>-->
            <!--                                </Dropdown>-->
            <!--                            </div>-->

            <!--                            &lt;!&ndash; Settings Dropdown &ndash;&gt;-->
            <!--                            <div class="ml-3 relative">-->
            <!--                                <Dropdown align="right" width="48">-->
            <!--                                    <template #trigger>-->
            <!--                                        <button v-if="$page.props.jetstream.managesProfilePhotos"-->
            <!--                                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">-->
            <!--                                            <img class="h-8 w-8 rounded-full object-cover"-->
            <!--                                                 :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">-->
            <!--                                        </button>-->

            <!--                                        <span v-else class="inline-flex rounded-md">-->
            <!--                                                        <button type="button"-->
            <!--                                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">-->
            <!--                                                            {{ $page.props.user.name }}-->

            <!--                                                            <svg-->
            <!--                                                                class="ml-2 -mr-0.5 h-4 w-4"-->
            <!--                                                                xmlns="http://www.w3.org/2000/svg"-->
            <!--                                                                viewBox="0 0 20 20"-->
            <!--                                                                fill="currentColor"-->
            <!--                                                            >-->
            <!--                                                                <path fill-rule="evenodd"-->
            <!--                                                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"-->
            <!--                                                                      clip-rule="evenodd"/>-->
            <!--                                                            </svg>-->
            <!--                                                        </button>-->
            <!--                                                    </span>-->
            <!--                                    </template>-->

            <!--                                    <template #content>-->
            <!--                                        &lt;!&ndash; Account Management &ndash;&gt;-->
            <!--                                        <div class="block px-4 py-2 text-xs text-gray-400">-->
            <!--                                            Manage Account-->
            <!--                                        </div>-->

            <!--                                        <DropdownLink :href="route('profile.show')">-->
            <!--                                            Profile-->
            <!--                                        </DropdownLink>-->

            <!--                                        <DropdownLink v-if="$page.props.jetstream.hasApiFeatures"-->
            <!--                                                      :href="route('api-tokens.index')">-->
            <!--                                            API Tokens-->
            <!--                                        </DropdownLink>-->

            <!--                                        <div class="border-t border-gray-100"/>-->

            <!--                                        &lt;!&ndash; Authentication &ndash;&gt;-->
            <!--                                        <form @submit.prevent="logout">-->
            <!--                                            <DropdownLink as="button">-->
            <!--                                                Log Out-->
            <!--                                            </DropdownLink>-->
            <!--                                        </form>-->
            <!--                                    </template>-->
            <!--                                </Dropdown>-->
            <!--                            </div>-->
            <!--                        </div>-->

            <!--                        &lt;!&ndash; Hamburger &ndash;&gt;-->
            <!--                        <div class="-mr-2 flex items-center sm:hidden">-->
            <!--                            <button-->
            <!--                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"-->
            <!--                                @click="showingNavigationDropdown = ! showingNavigationDropdown">-->
            <!--                                <svg-->
            <!--                                    class="h-6 w-6"-->
            <!--                                    stroke="currentColor"-->
            <!--                                    fill="none"-->
            <!--                                    viewBox="0 0 24 24"-->
            <!--                                >-->
            <!--                                    <path-->
            <!--                                        :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"-->
            <!--                                        stroke-linecap="round"-->
            <!--                                        stroke-linejoin="round"-->
            <!--                                        stroke-width="2"-->
            <!--                                        d="M4 6h16M4 12h16M4 18h16"-->
            <!--                                    />-->
            <!--                                    <path-->
            <!--                                        :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"-->
            <!--                                        stroke-linecap="round"-->
            <!--                                        stroke-linejoin="round"-->
            <!--                                        stroke-width="2"-->
            <!--                                        d="M6 18L18 6M6 6l12 12"-->
            <!--                                    />-->
            <!--                                </svg>-->
            <!--                            </button>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->

            <!--                &lt;!&ndash; Responsive Navigation Menu &ndash;&gt;-->
            <!--                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}"-->
            <!--                     class="sm:hidden">-->
            <!--                    <div class="pt-2 pb-3 space-y-1">-->
            <!--                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">-->
            <!--                            Dashboard-->
            <!--                        </ResponsiveNavLink>-->
            <!--                    </div>-->

            <!--                    &lt;!&ndash; Responsive Settings Options &ndash;&gt;-->
            <!--                    <div class="pt-4 pb-1 border-t border-gray-200">-->
            <!--                        <div class="flex items-center px-4">-->
            <!--                            <div v-if="$page.props.jetstream.managesProfilePhotos" class="shrink-0 mr-3">-->
            <!--                                <img class="h-10 w-10 rounded-full object-cover"-->
            <!--                                     :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">-->
            <!--                            </div>-->

            <!--                            <div>-->
            <!--                                <div class="font-medium text-base text-gray-800">-->
            <!--                                    {{ $page.props.user.name }}-->
            <!--                                </div>-->
            <!--                                <div class="font-medium text-sm text-gray-500">-->
            <!--                                    {{ $page.props.user.email }}-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                        </div>-->

            <!--                        <div class="mt-3 space-y-1">-->
            <!--                            <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">-->
            <!--                                Profile-->
            <!--                            </ResponsiveNavLink>-->

            <!--                            <ResponsiveNavLink v-if="$page.props.jetstream.hasApiFeatures"-->
            <!--                                               :href="route('api-tokens.index')"-->
            <!--                                               :active="route().current('api-tokens.index')">-->
            <!--                                API Tokens-->
            <!--                            </ResponsiveNavLink>-->

            <!--                            &lt;!&ndash; Authentication &ndash;&gt;-->
            <!--                            <form method="POST" @submit.prevent="logout">-->
            <!--                                <ResponsiveNavLink as="button">-->
            <!--                                    Log Out-->
            <!--                                </ResponsiveNavLink>-->
            <!--                            </form>-->

            <!--                            &lt;!&ndash; Team Management &ndash;&gt;-->
            <!--                            <template v-if="$page.props.jetstream.hasTeamFeatures">-->
            <!--                                <div class="border-t border-gray-200"/>-->

            <!--                                <div class="block px-4 py-2 text-xs text-gray-400">-->
            <!--                                    Manage Team-->
            <!--                                </div>-->

            <!--                                &lt;!&ndash; Team Settings &ndash;&gt;-->
            <!--                                <ResponsiveNavLink :href="route('teams.show', $page.props.user.current_team)"-->
            <!--                                                   :active="route().current('teams.show')">-->
            <!--                                    Team Settings-->
            <!--                                </ResponsiveNavLink>-->

            <!--                                <ResponsiveNavLink v-if="$page.props.jetstream.canCreateTeams"-->
            <!--                                                   :href="route('teams.create')"-->
            <!--                                                   :active="route().current('teams.create')">-->
            <!--                                    Create New Team-->
            <!--                                </ResponsiveNavLink>-->

            <!--                                <div class="border-t border-gray-200"/>-->

            <!--                                &lt;!&ndash; Team Switcher &ndash;&gt;-->
            <!--                                <div class="block px-4 py-2 text-xs text-gray-400">-->
            <!--                                    Switch Teams-->
            <!--                                </div>-->

            <!--                                <template v-for="team in $page.props.user.all_teams" :key="team.id">-->
            <!--                                    <form @submit.prevent="switchToTeam(team)">-->
            <!--                                        <ResponsiveNavLink as="button">-->
            <!--                                            <div class="flex items-center">-->
            <!--                                                <svg-->
            <!--                                                    v-if="team.id == $page.props.user.current_team_id"-->
            <!--                                                    class="mr-2 h-5 w-5 text-green-400"-->
            <!--                                                    fill="none"-->
            <!--                                                    stroke-linecap="round"-->
            <!--                                                    stroke-linejoin="round"-->
            <!--                                                    stroke-width="2"-->
            <!--                                                    stroke="currentColor"-->
            <!--                                                    viewBox="0 0 24 24"-->
            <!--                                                >-->
            <!--                                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>-->
            <!--                                                </svg>-->
            <!--                                                <div>{{ team.name }}</div>-->
            <!--                                            </div>-->
            <!--                                        </ResponsiveNavLink>-->
            <!--                                    </form>-->
            <!--                                </template>-->
            <!--                            </template>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </nav>-->
            <NavBar></NavBar>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white">
                <div class="relative z-1 text-center mt-8">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <slot name="header"/>
                    </div>
                    <div class="left-0 top-0 absolute -z-1 hidden xl:inline"><img
                        :src="asset('assets/img/shape/shape34.png')"
                        class="animate-custom-movebounce w-[100px]"
                        alt="shape"></div>
                    <div class="right-2 top-40 absolute -z-1 hidden xl:inline"><img
                        :src="asset('assets/img/shape/shape35.png')" class="animate-custom-movebounce" alt="shape">
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot/>
            </main>

            <Footer/>
        </div>
    </div>
</template>