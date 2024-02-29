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
            data: null
        }
        let authInitialized = false
        let auth = null

        function setUserData(data) {
            user.data = data
        }

        function setUserLoggedIn(logged_in) {
            user.is_logged_in = logged_in
        }

        const error = ref(null)
        const getUser = computed(
            () =>
                user
        )
        const confirming_user = ref(true)

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
            onAuthStateChanged(auth, (user) => {
                confirming_user.value = false
                if (user) {
                    setUserData(user)
                    setUserLoggedIn(true)
                    router.push('/')
                } else {
                    setUserLoggedIn(false)
                    router.push('/login')
                }
            })
            authInitialized = true
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
                    setUserLoggedIn(true)
                }).catch((error) => {
                    console.log(error.message)
                    error.value = error.message
                })
            return user
        }
        const signOut = async (auth) => {
            await auth.signOut().then(() => {
                setUserLoggedIn(false)
            }).catch((error) => {
                console.log(error.message)
                error.value = error.message
            })
        }
        return {
            user,
            initAuth,
            error,
            getAuthInitStatus,
            getAuthFromStore,
            setUserData,
            confirming_user,
            setUserLoggedIn,
            getUser,
            signIn,
            signOut
        }
    })