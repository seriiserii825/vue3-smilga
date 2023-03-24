import {AppLayoutsEnum} from '../layouts/types';
const admin_routes = [
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
        path: '/ui/icons',
        name: 'icons',
        component: () => import('../views/IconsView.vue'),
        meta: {
            layout: AppLayoutsEnum.admin,
        },
    },
];
export default admin_routes;