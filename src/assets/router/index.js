import { createRouter, createWebHistory } from 'vue-router'
import DashboardComponent from '../../components/DashboardComponent.vue'
import OverviewComponent from '../../components/OverviewComponent.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/overview',
        name: 'Overview',
        component: OverviewComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'bg-nav-active'
})

export default router;