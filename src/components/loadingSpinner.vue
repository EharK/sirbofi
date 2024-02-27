<script setup>

</script>

<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid rgba(207, 213, 230, 0.2);
  border-top-color: #5ce6cd;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>