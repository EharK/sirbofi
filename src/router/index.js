import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";

import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import Subscription from "@/views/Subscription.vue";
import Payment from "@/views/Payment.vue";

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
        },
        {
            path: '/subscription',
            name: 'subscription',
            component: Subscription,
        },
        {
            path: '/payment',
            name: 'payment',
            component: Payment,
        }
    ]
})


router.beforeEach(async (to, from, next) => {
    const authStore = useAuthenticatorStore();
    const connectedAddress = JSON.parse(localStorage.getItem("wagmi.store")).state.data.account;
    const getUser = await authStore.isUserExist(connectedAddress === undefined ? null : connectedAddress);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (getUser !== undefined && (getUser.subscription_status || getUser.access_status)) {
            next()
        } else {
            next({name: 'login'})
        }
    } else {
        next()
    }
})

export default router
