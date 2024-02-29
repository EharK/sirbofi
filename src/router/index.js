import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";
import {useAuthenticatorStore} from "@/stores/Authenticator.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})


router.beforeEach(async (to, from, next) => {
    const authStore = useAuthenticatorStore()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (authStore.getUser.is_logged_in) {
            next()
        } else {
            next({name: 'login'})
        }
    } else {
        next()
    }
})

export default router
