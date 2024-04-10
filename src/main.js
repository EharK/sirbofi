import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Chains, createWeb3Auth } from '@kolirt/vue-web3-auth'
import Moralis from 'moralis'
const pinia = createPinia()

import App from './App.vue'

const app = createApp(App)

app.use(pinia)
import { useAuthenticatorStore } from './stores/Authenticator.js'
const authStore = useAuthenticatorStore()
authStore.initFirebaseApp()

import router from './router'
app.use(router)

app.use(
    createWeb3Auth({
        projectId: '9530ebae553ee2a8259143c9f0c80b91',
        chains: [Chains.mainnet, Chains.bsc, Chains.polygon]
    })
)

Moralis.start({
    apiKey: import.meta.env.VITE_MORALIS_API_KEY
});

app.mount('#app')
