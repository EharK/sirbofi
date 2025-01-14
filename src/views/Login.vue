<script setup>
import connectButtonVue from '@/components/connectButton.vue';
import OutsideNavbar from "@/components/OutsideNavbar.vue";
import {ref} from "vue";
import HowToAccessModal from "@/views/HowToAccessModal.vue";

if (!sessionStorage.connected) {
  localStorage.clear();
}

const howToAccessModalActive = ref(false);

</script>

<template>
  <div class="main-container">
    <HowToAccessModal @toggle="howToAccessModalActive=!howToAccessModalActive" :howToAccessModalActive="howToAccessModalActive" />
    <OutsideNavbar>
      <div class="left">
        <router-link to="/">
          <img src="/src/assets/SirBofiFullLogo.png" style="max-height: 30px" alt="">
        </router-link>
      </div>
      <div class="right">
        <button class="cta" @click="()=>{ howToAccessModalActive = !howToAccessModalActive }">
          How To Access
        </button>
      </div>
    </OutsideNavbar>
    <div class="login-pad-container">
      <div class="pad login-pad relative">
        <div class="login-pad-content-wrapper">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="162" height="256" viewBox="0 0 162 256"
               fill="none">
            <path d="M15 110.76L15 240.087L77.4026 239.923L77.4026 110.597L15 110.76Z"/>
            <path d="M85.4026 -0.0802917L85.4026 255.933L147.805 256.097L147.805 0.0834427L85.4026 -0.0802917Z"/>
          </svg>
          <div class="row">
            <loading-spinner v-if="confirmingUser"/>
          </div>
          <div class="buttons-wrapper">
            <connectButtonVue/>
          </div>
        </div>
          <button class="bones become-holder" @click="howToAccessModalActive=!howToAccessModalActive">
            How To Access?
          </button>
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

button.become-holder {
  border-bottom: 1px solid var(--slight);
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

button.become-holder:hover {
  border-bottom: 1px solid var(--light-green);
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

@property --var-black {
  syntax: "<color>";
  inherits: false;
  initial-value: #1a1a1a;
}

@property --var-dark {
  syntax: "<color>";
  inherits: false;
  initial-value: #2b2b2b;
}


.pad {
  width: max-content;
  height: max-content;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  outline: 1px solid var(--dark);
  background: radial-gradient(100% 100% at 100% 0%, var(--var-dark) 0%, var(--var-black) 100%);
  border-radius: 8px;
  transition: all .15s ease-in-out, --var-black .5s cubic-bezier(0,0,0,1), --var-dark .5s cubic-bezier(0,0,0,1);
}

.pad:hover {
  --var-dark: var(--light-green);
}

.login-pad {
  width: clamp(60px, 24rem, 90vw);
  aspect-ratio: 1/1;
  padding: 20px 40px 40px;
  margin-bottom: 10vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.buttons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

</style>