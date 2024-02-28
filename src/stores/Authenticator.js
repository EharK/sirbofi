import {defineStore} from 'pinia'
import {
    browserSessionPersistence,
    getAuth,
    onAuthStateChanged,
    setPersistence,
    signInWithEmailAndPassword
} from 'firebase/auth'
import {computed, ref} from "vue";

// CURRENTLY NOT USED

export const useAuthenticatorStore
    = defineStore(
    'AuthenticatorStore',
    () => {
        const user = {
            is_logged_in: false,
            data: {}
        }
        const setUserData = (data) => {
            user.data = data
        }
        const setLoggedIn = (logged_in) => {
            user.logged_in = logged_in
        }
        const error = ref(null)
        const getUser = computed(() => user)

        const signIn = async (email, password) => {
            const auth = getAuth()
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
            error,
            setUserData,
            setLoggedIn,
            getUser,
            signIn,
            signOut
        }
    })