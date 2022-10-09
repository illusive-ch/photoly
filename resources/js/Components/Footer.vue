<script setup>
const links = [
    {
        title: 'Services',
        options: [
            {'title': 'Test1', 'url': route('home')},
            {'title': 'Test2', 'url': route('home')},
            {'title': 'Test3', 'url': route('home')},
            {'title': 'Test4', 'url': route('home')},
        ]
    },
    {
        title: 'Quick Links',
        options: [
            {'title': 'Test5', 'url': route('home')},
            {'title': 'Test6', 'url': route('home')},
            {'title': 'Test7', 'url': route('home')},
            {'title': 'Test8', 'url': route('home')},
        ]
    },
    {
        title: 'Cool Footer stuff',
        options: [
            {'title': 'Test5', 'url': route('home')},
            {'title': 'Test6', 'url': route('home')},
            {'title': 'Test7', 'url': route('home')},
            {'title': 'Test8', 'url': route('home')},
        ]
    },
]
</script>
<template>
    <footer
        class="footer-area py-20 bg-gradient-to-b from-gray-50 to-gray-200">
        <div class="container">
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <div class="single-footer-widget">
                    <a href="index.html" class="logo inline-block mb-20 lg:mb-25">
                        <img :src="asset('assets/img/logo.png')" alt="logo">
                    </a>
                    <img :src="asset('assets/img/footer.png')" alt="footer-image">
                </div>
                <template v-for="category in links">
                    <div class="single-footer-widget">
                        <h3 class="font-bold text-black-color"
                            v-text="category.title"/>
                        <ul class="flex flex-col space-y-4 mt-4 ">
                            <template v-for="link in category.options">
                                <li class="">
                                    <a :href="link.url"
                                       class="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color relative before:absolute before:right-0 before:top-1/2 before:-translate-y-2/4 before:w-18 before:h-2 before:bg-secondary-color before:opacity-0 before:invisible hover:before:opacity-100 hover:before:visible pr-25">
                                        {{ link.title }}
                                    </a>
                                </li>
                            </template>
                        </ul>
                    </div>
                </template>

            </div>
        </div>
        <div class="right-[7%] bottom-[6%] absolute -z-1 hidden lg:inline"><img
            :src="asset('assets/img/shape/shape15.png')" class="animate-custom-rotateme" alt="shape"></div>
    </footer>
</template>
