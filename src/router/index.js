import {createRouter, createWebHistory} from 'vue-router';
import {loadLayoutMiddleware} from './middleware/loadLayout.middelware';
import HomeView from '../views/HomeView.vue';
import admin_routes from "./admin-routes";
import project_routes from "./projects-routes";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        ...admin_routes,
        ...project_routes,
    ],
});
router.beforeEach(loadLayoutMiddleware);
export default router;
