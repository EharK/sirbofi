import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()

import App from './App.vue'

const app = createApp(App)

app.use(pinia)
import { useAuthenticatorStore } from './stores/Authenticator.js'
const authStore = useAuthenticatorStore()
await authStore.initAuth()

import router from './router'
app.use(router)

app.mount('#app')
