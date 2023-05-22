<script setup lang="ts">
import { computed } from "vue";

console.log("App");
const backgroundStyle = computed(() => {
  const leftBottom = getColorString();
  const rightTop = getColorString();
  return `linear-gradient(45deg, ${leftBottom}, ${rightTop})`;
});

const getColorString = () => {
  return `rgba(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()}, 0.8)`;
};
const getRandomInt = () => {
  return Math.floor(Math.random() * 255);
};
</script>

<template>
  <div class="app" :style="{ background: backgroundStyle }">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.app {
  width: calc(100vw - 2rem);
  min-height: calc(100vh - 2rem);
  padding: 1rem;
  animation: fadein 1s forwards;
}
@keyframes fadein {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
