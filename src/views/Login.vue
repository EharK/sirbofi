<script setup>
import connectButtonVue from '@/components/connectButton.vue';
import OutsideNavbar from "@/components/OutsideNavbar.vue";

if (!sessionStorage.connected) {
  localStorage.clear();
}

</script>

<template>
  <div class="main-container">
    <OutsideNavbar>
      <div class="left">
        <router-link to="/">
          <img src="/src/assets/SirBofiFullLogo.png" style="max-height: 30px" alt="">
        </router-link>
      </div>
      <div class="right">
        <router-link to="/subscription">
          <button class="cta">
            Subscribe
          </button>
        </router-link>
      </div>
    </OutsideNavbar>
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
            <connectButtonVue/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  margin: 0 auto;
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

.login-pad {
  width: clamp(60px,24rem, 90vw);
  height: auto;
  aspect-ratio: 1/1;
  padding: 20px 40px;
  margin-bottom: 10vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: all 0.15s ease-in-out;
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

</style>