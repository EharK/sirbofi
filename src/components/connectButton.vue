<script setup>
import {
  $off,
  $on,
  Events,
  account,
  connect as masterConnect
} from '@kolirt/vue-web3-auth';
import {reactive} from 'vue';
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import router from "@/router/index.js";

const props = defineProps(['isSubscription'])

const authStore = useAuthenticatorStore();

const loading = reactive({
  connecting: false
});

async function connect(newChain) {
  const handler = (state) => {
    if (!state) {
      loading.connecting = false
      $off(Events.ModalStateChanged, handler)
    }
  }

  $on(Events.ModalStateChanged, handler);

  loading.connecting = true;
  
  await masterConnect(newChain);

  const connectedHandler = async () => {
    if(props.isSubscription) {
      router.push('/subscription')
    } else {
      await authStore.signIn(account.address)
    }
    $off(Events.Connected, connectedHandler)
  }

  $on(Events.Connected, connectedHandler);
}
</script>

<template>
  <div v-if="account.connected">
    <button>{{account.shortAddress}}</button>
  </div>
  <div v-else>
    <button @click="connect()">
      {{ loading.connecting ? 'Connecting...' : 'Connect wallet' }}
    </button>
  </div>
</template>
