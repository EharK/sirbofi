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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
}
</style>