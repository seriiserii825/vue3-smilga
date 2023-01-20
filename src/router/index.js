import {createRouter, createWebHistory} from 'vue-router';
import {loadLayoutMiddleware} from './middleware/loadLayout.middelware';
import {AppLayoutsEnum} from '../layouts/types';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('../views/projects/MenuView.vue'),
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('../views/admin/AdminView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/buttons',
            name: 'button',
            component: () => import('../views/admin/ui/ButtonsView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/forms',
            name: 'forms',
            component: () => import('../views/admin/ui/FormsView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/checkbox',
            name: 'checkbox',
            component: () => import('../views/admin/ui/CheckboxView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/radio',
            name: 'radio',
            component: () => import('../views/admin/ui/RadioView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/select',
            name: 'select',
            component: () => import('../views/admin/ui/SelectView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/input',
            name: 'input',
            component: () => import('../views/admin/ui/InputView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/lorem-ipsum',
            name: 'lorem-ipsum',
            component: () => import('../views/projects/LoremIpsum.vue'),
        },
        {
            path: '/color-generator',
            name: 'color-generator',
            component: () => import('../views/projects/ColorGeneratorView.vue'),
        },
        {
            path: '/grocery-bud',
            name: 'grocery-bud',
            component: () => import('../views/projects/GroceryBud.vue'),
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/projects/CartView.vue'),
        },
        {
            path: '/ui/icons',
            name: 'icons',
            component: () => import('../views/IconsView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
    ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
