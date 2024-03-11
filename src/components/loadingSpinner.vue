<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
  size: {
    type: Number,
    default: 16
  },
  thickness: {
    type: Number,
    default: 3
  }
})
const custom_size = props.size
const custom_thickness = props.thickness

</script>

<style scoped>

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: v-bind(custom_size + "px");
  height: v-bind(custom_size + "px");
  border-radius: 50%;
  border: v-bind(custom_thickness + "px") solid rgba(207, 213, 230, 0.2);
  border-top-color: #5ce6cd;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(calc(360deg * 1));
  }
}
</style>