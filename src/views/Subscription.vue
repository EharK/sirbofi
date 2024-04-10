<script setup>
import {useAuthenticatorStore} from "@/stores/Authenticator.js";
import {account} from '@kolirt/vue-web3-auth';
import connectButtonVue from '@/components/connectButton.vue';
import OutsideNavbar from "@/components/OutsideNavbar.vue";

const authStore = useAuthenticatorStore();
const getSubscription = await authStore.getSubscription();

const checkWallet = async () => {
  const bofiBalance = await authStore.getBofiBalance();
  if (bofiBalance >= getSubscription[0].bofiAmount) {
    await authStore.setAccess(account.address, true);
    alert("Now you can access the platform.");
  } else {
    await authStore.setAccess(account.address, false);
    alert("You don't have enough BOFI tokens to access the platform.");
  }
}
</script>

<template>
  <div class="main-container">
    <OutsideNavbar>
      <div class="left">
        <router-link to="/login">
          <button>
            Back
          </button>
        </router-link>
      </div>
      <div class="right">
        <connectButtonVue/>
      </div>
    </OutsideNavbar>
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
              <button class="cta">
                Subscribe
              </button>
            </RouterLink>
            <p>
              <span class="text-green">{{ getSubscription[0].monthlyPrice }}$</span> per month
            </p>
          </div>
        </div>
        <div class="option pad space-between">
          <div class="group flex column">
            <h2>Premium Access</h2>
            <p>Buy $BOFI once and get unlimited access while holding!</p>
          </div>
          <div class="group flex space-between align-center">
            <div v-if="account.connected">
              <button @click="checkWallet">
                Check my wallet
              </button>
            </div>
            <div v-else>
              <connectButtonVue/>
            </div>
            <p>
              <span class="text-green">{{ getSubscription[0].bofiAmount * 0.000001 }}M</span> $BOFI tokens
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

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
  margin-top: -40px;
  gap: 2rem;
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