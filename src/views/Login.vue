<template>
  <div class="login-pad-container">
    <div class="pad login-pad">
      <div class="login-pad-content-wrapper">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="162" height="256" viewBox="0 0 162 256" fill="none">
          <path d="M15 110.76L15 240.087L77.4026 239.923L77.4026 110.597L15 110.76Z"/>
          <path d="M85.4026 -0.0802917L85.4026 255.933L147.805 256.097L147.805 0.0834427L85.4026 -0.0802917Z"/>
        </svg>
        <div class="row">
          <loading-spinner v-if="confirmingUser"/>
        </div>
        <div class="input-fields" v-if="!confirmingUser">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from "@/components/loadingSpinner.vue";
import {ref} from "vue";
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import {useRouter} from "vue-router";
const router = useRouter()

const authStore = useAuthenticatorStore()
const confirmingUser = ref(false)

const auth_loading = ref(false)
const error_in_authentication = ref(false)
const creds = ref({
  email: '',
  password: ''
})

function signIn() {
  error_in_authentication.value = false;
  auth_loading.value = true
  authStore.signIn(creds.value.email, creds.value.password).then(
      (user) => {
        if (user && user.data?.uid) {
          router.push('/')
        } else {
          console.log('no user')
          error_in_authentication.value = true;
        }
      }
  ).catch(err => {
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
</script>

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

.login-pad-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

.login-pad {
  width: 400px;
  height: 400px;
  padding: 20px 40px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
}
</style>