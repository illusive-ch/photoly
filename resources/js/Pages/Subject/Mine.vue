<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {computed, reactive, ref, watch} from 'vue'
import {TagIcon, PauseIcon,} from '@heroicons/vue/24/outline'
import {PlayIcon} from '@heroicons/vue/24/solid'
import SubjectScore from '@/Components/SubjectScoreMini.vue';
import MobileNav from '@/Components/MobileNav.vue';

const props = defineProps({
    subjects: Object,
});
const selectedTab = ref(0)
const tabs = [
    {name: 'Photo', selected: true},
    {name: 'Category', selected: false},
    {name: 'Details', selected: false},
    {name: 'Test Size', selected: false},
]

const totalSubjects = computed(() => {
    return props.subjects.data.length
})
</script>


<template>
    <AppLayout title="Profile">
        <template #header>
            <h1 class="text-2xl font-bold">
                My Photos
            </h1>
            <p class="text-xs">
                {{ totalSubjects }} Photos
            </p>
        </template>
        <div class="mx-auto">
            <div class="bg-white rounded-md p-4">
                <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        as="div"
                        v-for="subject in subjects.data"
                        :key="subject.id"
                        :href="route('category.subjects.show', {category: subject.category.id, subject: subject.id})"
                        class="group cursor-pointer">
                        <div class="rounded-lg shadow-below">
                            <div class="relative">
                                <div
                                    class="bg-gradient-to-b rounded-lg from-transparent via-gray-800 to-black w-full h-full absolute inset-0 opacity-50"/>
                                <div
                                    class="w-full overflow-hidden rounded-lg aspect-4/5">
                                    <img :src="subject.image" alt=""
                                         class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                                </div>
                                <div
                                    :class="
                                    {
                                        'text-gray-800 bg-gradient-to-r from-salmon to-wild-watermelon': subject.status === true,
                                        'text-gray-200 bg-gray-200 bg-opacity-10 backdrop-blur-2xl': subject.status === false
                                    }
                                    "
                                    class="absolute top-0 rounded-tl-lg rounded-br-lg text-sm px-2 py-1">
                                    <span class="">
                                        {{ subject.depictions_count ? subject.depictions_count : 0 }} votes
                                    </span>
                                </div>
                                <div class="absolute top-0 right-0  px-2 py-1 text-sm ">
                                    <PauseIcon v-if="subject.status === false"
                                               class="h-6 w-6 font-black text-gray-200"/>
                                    <PlayIcon v-if="subject.status === true"
                                              class="h-6 w-6 font-black fill-wild-watermelon"/>
                                </div>
                                <div
                                    class="flex flex-col absolute bottom-0 px-2 py-1 w-full">
                                    <div v-for="(score,name, index) in subject.scores" class="">
                                        <SubjectScore :score="score" :name="name" :loopIndex="index"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <MobileNav/>
    </AppLayout>
</template>
