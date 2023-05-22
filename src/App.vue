<script setup lang="ts">
import { computed } from "vue";

console.log("App");
const backgroundStyle = computed(() => {
  const charcters = "ABCDEF0123456789";
  const leftButtom = Array.from(Array(6))
    .map(() => charcters[Math.floor(Math.random() * charcters.length)])
    .join("");
  const rightTop = Array.from(Array(6))
    .map(() => charcters[Math.floor(Math.random() * charcters.length)])
    .join("");
  return `linear-gradient(to top right, #${leftButtom}, #${rightTop})`;
});
</script>

<template>
  <div class="app" :style="{ background: backgroundStyle }">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;
}
</style>
