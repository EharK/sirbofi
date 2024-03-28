<template>
  <div class="top-bar-container">
    <div class="top-bar-content-wrapper">
      <span class="current-user">
        <button>{{ account.shortAddress }}</button>
      </span>
      <span class="buttons-wrapper">
        <button @click="signOutHandler(account.address)">{{ loading.logouting ? 'Logouting...' : 'Log out' }}</button>
      </span>
    </div>
  </div>
</template>

<script setup>
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import {account} from '@kolirt/vue-web3-auth';
import {
  $off,
  $on,
  Events,
  disconnect as masterDisconnect
} from '@kolirt/vue-web3-auth';
import {reactive} from 'vue';

const authStore = useAuthenticatorStore();

const loading = reactive({
  logouting: false
});

async function signOutHandler(walletAddress) {
  loading.logouting = true
  const handler = () => {
    loading.logouting = false;
    authStore.signOut(walletAddress);
    $off(Events.Disconnected, handler);
  }

  $on(Events.Disconnected, handler);

  await masterDisconnect().catch(() => {
    loading.logouting = false;
    $off(Events.Disconnected, handler);
  })
}
</script>

<style scoped>

.top-bar-container {
  position: relative;
  width: 100%;
}

.top-bar-content-wrapper {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  backdrop-filter: blur(10px) brightness(0.8);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: opacity 0.1s ease-in-out;
  z-index: 100;
  white-space: nowrap;
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