import {defineStore} from 'pinia'
import {
    browserSessionPersistence, getAuth,
    onAuthStateChanged,
    setPersistence,
    signInWithEmailAndPassword
} from 'firebase/auth'
import {computed, ref} from "vue";
import {initializeApp} from "firebase/app";
import router from "@/router/index.js";


export const useAuthenticatorStore
    = defineStore(
    'AuthenticatorStore',
    () => {
        const user = {
            is_logged_in: false,
            data: {}
        }
        let authInitialized = false
        let auth = null
        const setUserData = (data) => {
            user.data = data
        }
        const setLoggedIn = (logged_in) => {
            user.is_logged_in = logged_in
        }
        const error = ref(null)
        const getUser = computed(
            () =>
                user
        )
        const getUserLoginStatus = computed(
            () =>
                user.is_logged_in
        )

        const initAuth = async () => {
            const firebaseConfig = {
                apiKey: "AIzaSyD81g-c9f8yiDbC_atW-Pvp_MP7t_aTjKQ",
                authDomain: "aoft-de2ab.firebaseapp.com",
                projectId: "aoft-de2ab",
                storageBucket: "aoft-de2ab.appspot.com",
                messagingSenderId: "630650035711",
                appId: "1:630650035711:web:210507afd411fc5cb91bca",
                measurementId: "G-W5TJ6PV4GV"
            };
            initializeApp(firebaseConfig);
            auth = getAuth()
            await setPersistence(auth, browserSessionPersistence)
                .then(() => {
                    console.log("persistence SET")
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            setUserData(user)
                            setLoggedIn(true)
                            router.push({name: 'home'})
                        } else {
                            setLoggedIn(false)
                            router.push({name: 'login'})
                        }
                    })
                    authInitialized = true
                }).catch((error) => {
                    console.log(error.message)
                    error.value = error.message
                })

        }
        const getAuthInitStatus = computed(
            () =>
                authInitialized
        )
        const getAuthFromStore = computed(
            () =>
                auth
        )
        const signIn = async (email, password) => {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setUserData(userCredential.user)
                }).catch((error) => {
                    console.log(error.message)
                    error.value = error.message
                })
            return user
        }
        const signOut = async (auth) => {
            await auth.signOut().then(() => {
                setLoggedIn(false)
            }).catch((error) => {
                console.log(error.message)
                error.value = error.message
            })
        }
        return {
            user,
            initAuth,
            error,
            getUserLoginStatus,
            getAuthInitStatus,
            getAuthFromStore,
            setUserData,
            setLoggedIn,
            getUser,
            signIn,
            signOut
        }
    })