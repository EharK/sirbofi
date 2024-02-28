import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";
import {getAuth} from "firebase/auth";


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
//     const auth = getAuth()
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         console.log(auth.currentUser)
//         if (!auth.currentUser) {
//             next(
//                 {
//                     name: 'login',
//                 }
//             )
//         }
//     } else {
//         next()
//     }
// })

export default router
