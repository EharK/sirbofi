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


// router.beforeEach(async (to, from, next) => {
//     const auth = useAuthenticatorStore().getAuthFromStore
//     console.log("current user:", auth.currentUser, useAuthenticatorStore().getUser)
//     console.log("to:", to.name)
//     if (to.matched.some(record => record.meta.requiresAuth)
//         && !auth.currentUser) {
//             next({name: 'login'})
//     } else if (to.name === 'login' && auth.currentUser) {
//         next({name: 'home'})
//     } else {
//         next()
//     }
// })

export default router
