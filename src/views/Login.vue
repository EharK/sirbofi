<script setup>
import {
  $off,
  $on,
  Events,
  account,
  connect as masterConnect,
  disconnect as masterDisconnect,
} from '@kolirt/vue-web3-auth';
import { computed, reactive } from 'vue';
import {useRouter} from "vue-router";
import {useAuthenticatorStore} from "@/stores/Authenticator.js";

const router = useRouter()
const authStore = useAuthenticatorStore()

const loading = reactive({
  connecting: false
})

async function connect(newChain) {
  const handler = (state) => {
    if (!state) {
      loading.connecting = false
      $off(Events.ModalStateChanged, handler)
    }
  }

  $on(Events.ModalStateChanged, handler)

  loading.connecting = true
  
  await masterConnect(newChain)

  const connectedHandler = () => {
    authStore.setUserData(account.address)
    authStore.setUserLoggedIn(true)
    router.push('/')
    $off(Events.Connected, connectedHandler)
  }
  $on(Events.Connected, connectedHandler)
}

async function reconnect(newChain) {
  if (chain.value.id !== newChain.id) {
    await masterDisconnect()
    await masterConnect(newChain)
  }
}

</script>

<template>
  <div class="main-container">
      <div class="top-buttons-wrapper">
          <router-link to="/subscription">
        <button>
            Subscribe
        </button>
          </router-link>
      </div>
    <div class="login-pad-container">
      <div class="pad login-pad">
        <div class="login-pad-content-wrapper">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="162" height="256" viewBox="0 0 162 256"
               fill="none">
            <path d="M15 110.76L15 240.087L77.4026 239.923L77.4026 110.597L15 110.76Z"/>
            <path d="M85.4026 -0.0802917L85.4026 255.933L147.805 256.097L147.805 0.0834427L85.4026 -0.0802917Z"/>
          </svg>
          <div class="row">
            <loading-spinner v-if="confirmingUser"/>
          </div>
          <!-- <div class="input-fields" v-if="!confirmingUser">
            <input type="text" v-model="creds.email" placeholder="Email"/>
            <input type="password" v-model="creds.password" placeholder="Key"/>
          </div>
          <div class="buttons-wrapper" v-if="!confirmingUser">
            <div class="error" v-if="error_in_authentication">
              Authentication failed
            </div>
            <button @click="signIn" :class="{'disabled': auth_loading}">
              <loading-spinner v-if="auth_loading"/>
              Authenticate
            </button>
          </div> -->

          <div class="buttons-wrapper">
            <button @click="connect()">
              {{ loading.connecting ? 'Connecting...' : 'Connect wallet' }}
            </button>
          </div>
          <div class="buttons-wrapper">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script setup>
import LoadingSpinner from "@/components/loadingSpinner.vue";
import {computed, ref} from "vue";
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import {useRouter} from "vue-router";

const router = useRouter()

const authStore = useAuthenticatorStore()
const confirmingUser = computed(() => authStore.confirming_user)
const auth_loading = ref(false)
const error_in_authentication = ref(false)
const creds = ref({
  email: '',
  password: ''
})

function signIn() {
  error_in_authentication.value = false;
  auth_loading.value = true
  authStore.signIn(creds.value.email, creds.value.password)
      .then(
          (user) => {
            if (user && user.data?.uid) {
              authStore.setUserData(user.data)
              authStore.setUserLoggedIn(true)
              router.push('/')
            } else {
              error_in_authentication.value = true;
            }
          }
      ).catch(
      (err) => {
        console.log(err)
        error_in_authentication.value = true;
      }).finally(
      () => {
        auth_loading.value = false
      }
  )
}

window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    signIn()
  }
})
</script> -->

<style scoped>

.error {
  color: var(--glow-red);
  font-size: 12px;
  margin: 10px 0;
}

.logo {
  aspect-ratio: 1/1;
  width: 32px;
  height: 32px;
  fill: var(--light);
  margin: 0 auto 10px;
}

.main-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.login-pad-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

* {
  text-align: center;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.input-fields {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 40px 0;
}

.top-buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
}

.login-pad {
  width: 400px;
  height: 400px;
  padding: 20px 40px;
  margin-top: -100px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

</style>