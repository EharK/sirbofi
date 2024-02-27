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
    {
        state: () => ({
            user: ref(null),
            error: ref(null)
        }),
        getters: {
            isAuthenticated: computed(() => this.user !== null)
        },
        actions: {
            async login(email, password) {
                const auth = getAuth()
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, email, password)
                    this.user = userCredential.user
                } catch (e) {
                    this.error = e
                }
            },
            async init() {
                const auth = getAuth()
                await setPersistence(auth, browserSessionPersistence)
                onAuthStateChanged(auth, (user) => {
                    this.user = user
                })
            },
            async signOut() {
                const auth = getAuth()
                await auth.signOut()
                this.user = null
            },
        }
    })
