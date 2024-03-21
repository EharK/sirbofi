<script setup>
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import Moralis from 'moralis';
import { account } from '@kolirt/vue-web3-auth';
import connectButtonVue from '@/components/connectButton.vue';

const authStore = useAuthenticatorStore();
const getSubscription = await authStore.getSubscription();

function isBofi(result) {
  return result.symbol === "BOFI";
}

const checkWallet = async () => {
  try {
    const response = await Moralis.EvmApi.wallets.getWalletTokenBalancesPrice({
      "chain": "0x1",
      "address": account.address
    });
    const result = response.raw().result;
    const bofiBalance = result.find(isBofi).balance_formatted;
    if(bofiBalance >= getSubscription[0].bofiAmount) {
      await authStore.setAccess(account.address, true);
      alert("Now you can access the platform.");
    } else {
      await authStore.setAccess(account.address, false);
      alert("You don't have enough BOFI tokens to access the platform.");
    }
  } catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <div class="main-container">
    <div class="top-buttons-wrapper">
      <connectButtonVue isSubscription={{true}} />
    </div>
    <div class="title-and-options">
      <h1>Choose your plan</h1>
      <div class="options-container">
        <div class="option pad space-between">
          <div class="group flex column">
            <h2>
              Subscription
            </h2>
            <p>
              Pay once a month and get unlimited access!
            </p>
          </div>
          <div class="group flex space-between align-center">
            <RouterLink to="/payment"> <!-- Add a router link to the payment page -->
              <button>
                Subscribe
              </button>
            </RouterLink>
            <p>
              <span>{{getSubscription[0].monthlyPrice}}$</span> per month
            </p>
          </div>
        </div>
        <div class="option pad space-between">
          <div class="group flex column">
            <h2>Premium Access</h2>
            <p>Buy $BOFI once and get unlimited access while holding!</p>
          </div>
          <div class="group flex space-between align-center">
            <button v-if="account.connected" @click="checkWallet">
              Check my wallet
            </button>
            <connectButtonVue v-else isSubscription={{true}} />
            <p>
              <span>{{getSubscription[0].bofiAmount}}</span> $BOFI tokens
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.top-buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
  width: 100%;
}

ul {
  padding: 0;
  margin-left: 40px;
  line-height: 2;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.title-and-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  padding-bottom: 20rem;
}

.options-container {
  display: flex;
  flex-direction: row;
  gap: 4rem;
}

.option.pad {
  height: 26rem;
  width: 26rem;
  padding: 30px;
  border-radius: 4px;
  transition: all 0.15s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5;
}

.option.pad .group {
  gap: 1rem;
}

</style>