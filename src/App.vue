<template>
  <div class="main-container">
    <router-view v-slot="{ Component }">
      <suspense timeout="0">
        <template #default>
          <component :is="Component" :key="$route.path"></component>
        </template>
        <template #fallback>
          <div class="spinner-wrapper">
            <loadingSpinnerVue />
          </div>
        </template>
      </suspense>
    </router-view>
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router'
import loadingSpinnerVue from './components/loadingSpinner.vue';
</script>

<style scoped>

.main-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #262626, #0d0d0d);
  color: #cfd6e6;
  display: flex;
  flex-direction: column;
}

.spinner-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
