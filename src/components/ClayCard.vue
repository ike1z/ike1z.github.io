<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="clay-card">
    <h2 class="clay-card-title" v-text="title" />
    <div class="clay-card-message">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.clay-card {
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  width: 320px;
  height: 240px;
  margin: 20px 0;
  border-radius: 20px;
  color: #444;

  box-shadow: 20px 20px 40px 0px rgba(50, 50, 50, 0.8),
    inset -12px -12px 16px 0px rgba(155, 155, 155, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
}
.clay-card-title {
  text-align: left;
  padding-left: 30px;
}
.clay-card-message {
  text-align: left;
  font-size: 18px;
}
</style>
