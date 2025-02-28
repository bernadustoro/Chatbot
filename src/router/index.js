import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/Login',
            name: 'Login',
            component: LoginPage
        }
    ],
})

export default router