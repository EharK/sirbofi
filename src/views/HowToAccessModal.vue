<script setup>
const props = defineProps(["howToAccessModalActive"]);
</script>

<template>
  <div class="how-to-access-modal-container"
       @click.self="$emit('toggle')"
       :class="{'active': howToAccessModalActive}">
    <div class="modal relative">
      <span class="close-btn" @click="$emit('toggle')">close</span>
      <div class="title-and-options">
        <h1>Token Gated Access</h1>
        <p class="text">Sir Bofi platform has become Token Gated Access only. For access a <span
            class="text text-green">minimum of 969 420 $BOFI tokens</span>
          are required. More information at <a class="" href="https://www.sirbofi.com/">sirbofi.com</a></p>
        <div class="flex row gap-8">
          <a href="https://app.uniswap.org/explore/tokens/ethereum/0xe3374f14be081eae24e39e18360422b7aa769859" target="_blank">
            <button class="cta">
              Join Sir Bofi
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: var(--light);
}

ul {
  padding: 0;
  margin-left: 40px;
  line-height: 2;
}

p {
  max-width: 600px;
  min-width: 0;
}

.how-to-access-modal-container {
  display: flex;
  pointer-events: none;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: center;
  transition: opacity .2s cubic-bezier(0, 0, 0, 1);
}

.how-to-access-modal-container.active {
  opacity: 1;
  pointer-events: all;
}

.title-and-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 24px;
  gap: 1rem;
}

.how-to-access-modal-container .modal h1 {
  line-height: 1;
}

.how-to-access-modal-container .modal {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);
  border: 1px solid var(--dark);
  border-radius: 8px;
  padding: 20px 30px;
  max-width: 600px;
  width: 90%;
  color: var(--light);
  margin-bottom: 15vh;
}

.cta {
  margin-top: 20px;
}
</style>