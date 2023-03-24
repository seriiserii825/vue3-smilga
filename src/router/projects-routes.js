const project_routes = [
    {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/projects/MenuView.vue'),
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: () => import('../views/projects/QuizView.vue'),
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
        path: '/cart',
        name: 'cart',
        component: () => import('../views/projects/CartView.vue'),
    },
    {
        path: '/hyrule-jobs',
        name: 'hyrule-jobs',
        component: () => import('../views/projects/HyruleJobsView.vue'),
    },
];
export default project_routes;