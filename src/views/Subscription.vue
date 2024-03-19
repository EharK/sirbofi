<script setup>
import connectButtonVue from '@/components/connectButton.vue';
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
              Annual subscription
            </h2>
            <p>
              Pay once a year and get unlimited access!
            </p>
          </div>
          <div class="group flex space-between align-center">
            <RouterLink to="/payment"> <!-- Add a router link to the payment page -->
              <button>
                Subscribe
              </button>
            </RouterLink>
            <p>
              <span class="blur">299$</span> / year
            </p>
          </div>
        </div>
        <div class="option pad space-between">
          <div class="group flex column">
            <h2>Premium Access</h2>
            <p>Buy $BOFI once and get unlimited access while holding!</p>
          </div>
          <div class="group flex space-between align-center">
            <button>
              Check my wallet
            </button>
            <p>
              <span class="blur">4%</span> of $BOFI supply
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