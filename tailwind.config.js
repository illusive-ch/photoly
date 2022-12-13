const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '128': '32rem',
            },
            scale: {
                '175': '1.75',
                '200': '2.00',
            },
            colors: {
                'gray': {
                    '150': '#F1F0F0'
                },
                'blue': {
                    '50': '#F1F9FF',
                },
                'cream-brulee': {
                    DEFAULT: '#FED9A2',

                    '200': '#FFFAF3',
                    '300': '#FEE9CA',
                    '400': '#FFEBCB',
                    '500': '#FED9A2',
                    '600': '#FDC26A',
                    '700': '#FDAC33',
                    '800': '#F59403',
                    '900': '#BE7202'
                },
                'salmon': {
                    DEFAULT: '#FF916E',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FFEEE8',
                    '300': '#FFCFC0',
                    '400': '#FFB097',
                    '500': '#FF916E',
                    '600': '#FF6636',
                    '700': '#FD3D00',
                    '800': '#C52F00',
                    '900': '#8D2200'
                },
                'wild-watermelon': {
                    DEFAULT: '#FE4977',
                    '50': '#FFFFFF',
                    '100': '#FFEBF0',
                    '200': '#FFC3D2',
                    '300': '#FE9AB4',
                    '400': '#FE7295',
                    '500': '#FE4977',
                    '600': '#FE114D',
                    '700': '#D60137',
                    '800': '#9E0129',
                    '900': '#66011A'
                },
            },
            divideWidth: {
                '1': '1px'
            },
            backgroundImage: {},
            boxShadow: {
                "below": '0 5px 5px 0px rgb(0 0 0 / 0.3)',
            },
            aspectRatio: {
                '4/5': '4 / 5'
            },
            blur: {
                xs: '2px',
                xxs: '1px',
            },
            container: {
                center: true,
                padding: '15px',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@headlessui/tailwindcss')],
};
