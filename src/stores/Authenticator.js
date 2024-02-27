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
        const user = ref(null)
        const error = ref(null)
        const isAuthenticated = computed(() => user.value !== null)
        const getUser = computed(() => user.value)

        const signIn = async (email, password) => {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            user.value = userCredential.user
            return user.value
        }
        const init = async () => {
            const auth = getAuth()
            await setPersistence(auth, browserSessionPersistence)
            onAuthStateChanged(auth, (user) => {
                user.value = user
            })
        }
        const signOut = async () => {
            const auth = getAuth()
            await auth.signOut()
            user.value = null
            window.location.href = '/login'
        }

        return {
            user,
            error,
            isAuthenticated,
            getUser,
            signIn,
            init,
            signOut
        }
    })