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
                sans: ['Spartan', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '128': '32rem',
            },
            colors: {
                'black-color': '#000000',
                'primary-color': {
                    DEFAULT: '#FF0779',
                    '50': '#FFECF5',
                    '100': '#FFAAD1',
                    '200': '#FF81BB',
                    '300': '#FF59A5',
                    '400': '#FF308F',
                    '500': '#FF0779',
                    '600': '#CE005F',
                    '700': '#960045',
                    '800': '#5E002B',
                    '900': '#260011'
                },
                'secondary-color': '#4a00e0',
                'purple-color': '#4A00E0',
                'optional-color': '#464646',
                'gray-light-color': '#f2f2f2',
                'white-light': 'rgba(255, 255, 255, 0.5)',
                'yello-light': {
                    DEFAULT: '#EFE5D7',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FFFFFF',
                    '300': '#FBF8F4',
                    '400': '#FBF8F4',
                    '500': '#EFE5D7',
                    '600': '#DFCBAF',
                    '700': '#CFB187',
                    '800': '#BF975F',
                    '900': '#A47B42'
                },
            },
            backgroundImage: {
                'gradient-color': 'linear-gradient(90deg, #FF0080 0%, #FF8C00 100%)',
                'primary-gradient-color': 'linear-gradient(90deg, #FF0080 67.19%, #FF8C00 100%)',
                'secondary-gradient-color': 'linear-gradient(91.43deg, #4A00E0 1.22%, #8E2DE2 98.84%)',
                'gray-gradient-color': 'linear-gradient(180deg, #FBFBFB 0%, #FBFBFB 100%)',
                'instagram-gradient-color': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
                'green-gradient-color': 'linear-gradient(91.43deg, #11998E 1.22%, #38EF7D 98.84%)',
                'yello-gradient-color': 'linear-gradient(90deg, #E65C00 0%, #F9D423 100%)',
            },
            zIndex: {
                '1': '1',
                '2': '2',
                '9999': '9999',
                '99': '99',
                '999': '999',
            },
            lineHeight: {
                '63': '63px',
            },
            boxShadow: {
                'custom-box-shadow': '0px 10px 15px rgba(142, 45, 226, 0.15)',
                'custom-box-shadow2': '0px 14px 30px rgba(0, 0, 0, 0.05)',
                'custom-box-shadow3': '0px 2px 15px rgba(58, 58, 58, 0.1)',
                'custom-box-shadow4': '0px 2px 15px rgba(0, 0, 0, 0.06)',
                'primary-btn': '0px 15px 40px rgba(244, 27, 84, 0.3)',
                'secondary-btn': '0px 15px 40px rgba(142, 45, 226, 0.3)',
                'navbar': '0px 2px 20px rgba(0, 0, 0, 0.05)',
                'dropdown': '0px 0px 15px 0px rgba(0, 0, 0, .10)',
            },
            animation: {
                'custom-slow-rotateme': 'rotateme 100s linear infinite',
                'custom-rotateme': 'rotateme 20s linear infinite',
                'custom-movebounce': 'movebounce 2s linear infinite',
                'custom-moveleftbounce': 'moveleftbounce 2s linear infinite',
                'animationFramesOne': 'animationFramesOne 15s infinite linear'
            },
            container: {
                center: true,
                padding: '15px',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@headlessui/tailwindcss')],
};
