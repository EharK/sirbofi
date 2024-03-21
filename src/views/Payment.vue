<template>
  <div class="loading-wrapper" v-if="transactionStatus">
    <loading-spinner v-if="transactionStatus"/>
  </div>
  <div class="main-container">
    <div class="payment-section-sides-wrapper">
      <div class="payment-wrapper left-side option flex column">
        <img src="@/assets/icons/logo.ico" alt="sirbofi-logo" width="64px" aria-hidden="true">
        <h2>12 months of unlimited access</h2>
        <ul>
          <li>Fastest in the market</li>
          <li>600+ exchanges</li>
          <li>9000+ cryptocurrencies</li>
        </ul>
        <router-link to="/subscription">
          <button>{{ "Available plans" }}</button>
        </router-link>
      </div>
      <div class="vr" aria-hidden="true"></div>
      <div class="payment-wrapper option flex column">
        <img src="@/assets/icons/logo.ico" alt="sirbofi-logo" style="opacity: 0" width="64px" aria-hidden="true">
        <h2>Welcome to Sir Bofi!</h2>
        <div class="group flex column gap-8">
          <div>{{ "Period: " }}<span class="text-red">*</span></div>
          <div class="flex row gap-8">
            <button
              class="toggle-button uppercase"
              @click="togglePeriodOption(period)"
              :class="{'selected': period===selected_period}"
              :key="period"
              v-for="period in period_options"
            >
              {{ period + " month" + (period > 1 ? "s" : "") }}
            </button>
          </div>
        </div>
        <div class="group flex column gap-8">
          <div>Payment currency <span class="text-red">*</span></div>
          <div class="flex row gap-8">
            <button
              class="toggle-button uppercase"
              @click="togglePaymentOption(opt)"
              :class="{'selected': opt===selected_payment}"
              v-for="(opt, key) in payment_options"
              :key="key"
            >
              {{ opt }}
            </button>
          </div>
        </div>
        <div class="group flex column gap-8">
          <div>{{ "Wallet: " }}<span class="text-red">*</span></div>
          <div>
            <div v-if="account.connected">
              <span class="text-green">{{ account.shortAddress }}</span>
            </div>
            <div v-else>
              <connectButtonVue isSubscription={{true}} />
            </div>
          </div>
        </div>
        <hr>
        <div class="group flex space-between align-center"
             :class="{'disabled': !selected_payment || !selected_period || !account.connected}">
          <h3 v-if="selected_payment">
            <div>
              Send {{ amount_to_be_paid + "$" }}
            </div>
            <div class="text">
              {{ "Amounts to " }}
              <span class="text-green">{{ frmtNr(amount_to_payment) }}</span>
              {{ " " + selected_payment.toUpperCase() }}
            </div>
          </h3>
          <button class="cta" @click="sendPayment" :disabled="!selected_payment || !selected_period || !account.connected">Send payment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import connectButtonVue from '@/components/connectButton.vue';
import LoadingSpinner from "@/components/loadingSpinner.vue";
import { computed, ref } from "vue";
import { account, sendTransaction, waitForTransaction, erc20ABI, writeContract } from '@kolirt/vue-web3-auth';
import Moralis from 'moralis';
import { useAuthenticatorStore } from "@/stores/Authenticator.js";

const authStore = useAuthenticatorStore();
const getSubscription = await authStore.getSubscription().catch(error => {
  console.error("Error fetching subscription:", error);
  return [];
});

const period_options = [1, 3, 6, 12];  // months
const selected_period = ref(1);
const transactionStatus = ref(false)
const payment_options = {
  eth: "eth",
  bofi: "bofi"
}
const selected_payment = ref(payment_options.bofi);

const getPrices = async () => {
  try {
    const response = await Moralis.EvmApi.token.getMultipleTokenPrices({
      "chain": "0x1",
      "include": "percent_change"
    },{
      "tokens": [
        {
          "tokenAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
        },
        {
          "tokenAddress": "0xe3374f14Be081EAe24E39E18360422b7AA769859"
        }
      ]
    });

    return [response.result[0]?.usdPrice || 0, response.result[1]?.usdPrice || 0];
  } catch (error) {
    console.error("Error fetching token prices:", error);
    return [0, 0];
  }
}

const tokenPrices = await getPrices();

const amount_to_be_paid = computed(
  () => selected_period.value * (getSubscription[0]?.monthlyPrice || 0)
)

const amount_to_payment = computed(
  () => {
    let payment_currency_rate = null;
    if (selected_payment.value === payment_options.eth) {
      payment_currency_rate = tokenPrices[0];
    } else if (selected_payment.value === payment_options.bofi) {
      payment_currency_rate = tokenPrices[1];
    }
    return (amount_to_be_paid.value / payment_currency_rate).toPrecision(8)
  }
)

const togglePaymentOption = (option) => {
  selected_payment.value = option;
}

const togglePeriodOption = (option) => {
  selected_period.value = option;
}

const sendPayment = async () => {
  transactionStatus.value = true;
  if(selected_payment.value === payment_options.eth) {
    const tx = await sendTransaction({
      to: import.meta.env.VITE_WALLET_ADDRESS,
      value: Moralis.Core.BigNumber.fromDecimal(amount_to_payment.value, 18)
    }).catch(error => {
      console.log(error)
      transactionStatus.value = false;
    });

    await waitForTransaction({
      hash: tx.hash,
    }).then(async (transactionReceipt) => {
      await authStore.setSubscription(selected_period.value, account.address);
      transactionStatus.value = false;
    });
  } else {
    await writeContract({
      abi: erc20ABI,
      address: '0xe3374f14Be081EAe24E39E18360422b7AA769859',
      functionName: 'transfer',
      args: [import.meta.env.VITE_WALLET_ADDRESS, Moralis.Core.BigNumber.fromDecimal(amount_to_payment.value, 9)]
    }).then(async (data) => {
      // console.log('hash', data.hash)
      await data.wait()
      await authStore.setSubscription(selected_period.value, account.address);
      transactionStatus.value = false;
      // console.log('transaction successfully')
    }).catch(error => {
      console.log(error)
      transactionStatus.value = false;
    });
  }
}

const frmtNr = (nr) => {
  return Intl.NumberFormat("en", {
    maximumFractionDigits: 8,
  }).format(nr)
}

const response = await Moralis.EvmApi.balance.getNativeBalance({
    "chain": "0x1",
    "address": "0xAf9b272Ebf93EC0aE180d4d47c4Ff94f0C06B7ef"
  });
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
  font-size: clamp(0.5rem, 1.4vw, 1rem);
}

.loading-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 73%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-section-sides-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
  gap: 4rem;
  width: 100%;
  padding: 6rem 4rem;
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