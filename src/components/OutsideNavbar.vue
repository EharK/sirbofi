<script setup>

</script>

<template>
  <div class="top-buttons-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>

.top-buttons-wrapper {
  position: absolute;
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  gap: 10px;
  padding: 20px;
}
</style>