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
            component: () => import('../views/MenuView.vue'),
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('../views/AdminView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/buttons',
            name: 'button',
            component: () => import('../views/ButtonsView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/ui/inputs',
            name: 'inputs',
            component: () => import('../views/InputsView.vue'),
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: '/lorem-ipsum',
            name: 'lorem-ipsum',
            component: () => import('../views/LoremIpsum.vue'),
        },
        {
            path: '/color-generator',
            name: 'color-generator',
            component: () => import('../views/ColorGeneratorView.vue'),
        },
        {
            path: '/grocery-bud',
            name: 'grocery-bud',
            component: () => import('../views/GroceryBud.vue'),
        },
    ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
