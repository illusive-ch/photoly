import './bootstrap';
import '../css/app.css';
import {createApp, h} from 'vue';
import {createInertiaApp, Link, Head} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import Vapor from 'laravel-vapor';

window.Vapor = Vapor;
window.Vapor.withBaseAssetUrl(import.meta.env.VITE_VAPOR_ASSET_URL)

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("Link", Link)
            .component("Head", Head)
            .mixin({
                methods: {
                    asset: window.Vapor.asset
                },
            })
            .mount(el);
    },
});

InertiaProgress.init({color: '#4B5563'});
