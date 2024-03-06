<template>
  <div class="main-container">
    <div class="payment-section-sides-wrapper">
      <div class="payment-wrapper left-side option flex column">
        <img src="@/assets/icons/logo.ico" alt="sirbofi-logo" width="64px">
        <h2>
          12 months of unlimited access
        </h2>
        <ul>
          <li>Fastest in the market</li>
          <li>600+ exchanges</li>
          <li>9000+ crypto currencies</li>
        </ul>
        <router-link to="/subscription">
          <button>
            {{ "Available plans" }}
          </button>
        </router-link>
      </div>
      <div class="vr"></div>
      <div class="payment-wrapper option flex column">
        <img src="@/assets/icons/logo.ico" alt="sirbofi-logo" style="opacity: 0" width="64px">
        <div class="group flex column gap-8">
          <h2>Welcome to Sir Bofi!</h2>
          <div>Select payment currency <span class="text-red">*</span></div>
          <div class="flex row gap-8">
            <button class="toggle-button uppercase"
                    @click="togglePaymentOption(payment_options[opt])"
                    :class="{'selected': opt===selected_payment}"
                    v-for="opt in payment_options">
              {{ opt }}
            </button>
          </div>
        </div>
        <div class="group flex column gap-8">
          <div>
            currently selected wallet:
          </div>
          <div>
            <span class="text-green" v-if="selected_wallet">{{ selected_wallet }}</span>
            <button v-else>
              Connect wallet
            </button>
          </div>
        </div>
        <hr>
        <div class="group flex space-between align-center"
             :class="{'disabled': !selected_payment}">
          <h3>
            <div v-if="selected_payment">
              Send <span class="text-green blur">{{ amount_to_be_paid }}</span> {{ selected_payment.toUpperCase() }}
            </div>
          </h3>
          <button class="cta">
            Send payment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const payment_options = {
  eth: "eth",
  bofi: "bofi"
}
const selected_payment = ref(payment_options.ethereum);
const amount_to_be_paid = ref(299);
const selected_wallet = ref(null);

const togglePaymentOption = (option) => {
  selected_payment.value = option;
}

</script>

<style scoped>

.vr {
  width: 0.1rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--slight) 50%, rgba(255, 255, 255, 0) 100%);
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: auto;
}

.payment-section-sides-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
  gap: 4rem;
  width: 100%;
  padding: 10rem 4rem;
}

.payment-wrapper {
  height: 100%;
  width: 50%;
  max-width: 500px;
  gap: 2rem;
}

.payment-wrapper.left-side {
  text-align: right;
  align-items: flex-end;
}

ul {
  padding: 0;
  margin-left: 40px;
  line-height: 2;
  list-style: none;
}

ul li::after {
  content: "•";
  margin-left: 10px;
}

</style>