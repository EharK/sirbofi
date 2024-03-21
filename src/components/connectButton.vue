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
import Moralis from 'moralis';

const props = defineProps(['isSubscription'])

const authStore = useAuthenticatorStore();

const loading = reactive({
  connecting: false
});

const getSubscription = await authStore.getSubscription();

function isBofi(result) {
  return result.symbol === "BOFI";
}

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
    try {
      const response = await Moralis.EvmApi.wallets.getWalletTokenBalancesPrice({
        "chain": "0x1",
        "address": account.address
      });
      const result = response.raw().result;
      const bofiBalance = result.find(isBofi).balance_formatted;
      if(bofiBalance >= getSubscription[0].bofiAmount) {
        await authStore.setAccess(account.address, true);
      } else {
        await authStore.setAccess(account.address, false);
      }
    } catch (e) {
      console.error(e);
    }

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
