<script setup>
import connectButtonVue from '@/components/connectButton.vue';
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

          <div class="buttons-wrapper">
            <connectButtonVue :is-subscription="false" />
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