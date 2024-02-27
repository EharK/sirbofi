<template>
  <div class="top-bar-container">
    <span class="current-user">
      <span>{{ user }}</span>
<!--      <span>{{ user.email.split('@')[0] }}</span>-->
    </span>
    <span class="buttons-wrapper">
      <button @click="signOut">Log out</button>
    </span>
  </div>
</template>

<script setup>
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import {ref} from "vue";

const authStore = useAuthenticatorStore()
const user = ref(authStore.user)
const signOut = authStore.signOut()

</script>

<style scoped>

.top-bar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  border: 1px solid var(--slight);
  background-color: #1a1a1a;
  border-radius: 8px;
  position: sticky;
  top: 20px;
  margin: 0 20px 40px;
  opacity: 0.4;
  transition: opacity 0.1s ease-in-out;
  z-index: 100;
  white-space: nowrap;
}

.top-bar-container:hover {
  opacity: 1;
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 1000px) {
  .top-bar-container {
    margin: 0;
    top: 0;
    border: 0;
    border-radius: 0;
  }
}

</style>