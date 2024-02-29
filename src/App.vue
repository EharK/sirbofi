<template>
  <div class="main-container">
    <RouterView/>
  </div>
</template>

<script setup>
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import {RouterView} from 'vue-router'
import {onBeforeMount} from "vue";

let auth;
const authStore = useAuthenticatorStore()

onBeforeMount(() => {
  authStore.initAuth()
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
