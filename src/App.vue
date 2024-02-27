<template>
  <div class="main-container">
    <RouterView/>
  </div>
</template>

<script setup>
import { useAuthenticatorStore } from "@/stores/Authenticator.js";
import {RouterView} from 'vue-router'
import { initializeApp } from "firebase/app";
import { onBeforeMount } from "vue";
import router from "@/router/index.js";

onBeforeMount(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyD81g-c9f8yiDbC_atW-Pvp_MP7t_aTjKQ",
    authDomain: "aoft-de2ab.firebaseapp.com",
    projectId: "aoft-de2ab",
    storageBucket: "aoft-de2ab.appspot.com",
    messagingSenderId: "630650035711",
    appId: "1:630650035711:web:210507afd411fc5cb91bca",
    measurementId: "G-W5TJ6PV4GV"
  };
  initializeApp(firebaseConfig);
  const authStore = useAuthenticatorStore()

  if (!authStore.user) {
    router.push('/login')
  }
})
</script>

<style scoped>

.main-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #262626, #0d0d0d);
  color: #cfd6e6;
}

</style>
