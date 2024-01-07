<template>
  <Transition name="fadeCard" appear>
    <div class="clay-card">
      <Spinner v-if="isLoading" :style="{ width: '100px', height: '100px' }" />
      <template v-else>
        <Transition name="fadeText" appear>
          <h2 class="clay-card-title" v-text="title" />
        </Transition>
        <Transition name="fadeText" appear>
          <div class="clay-card-message">
            <slot></slot>
          </div>
        </Transition>
      </template>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Spinner from "@/components/Spinner.vue";

const props = defineProps({
  title: { type: String, required: true },
  delay: { type: Number, default: 0 },
});

const isLoading = ref(true)
const delayString = computed(() => `${props.delay}ms`)

onMounted(() => {
  const randomInt = Math.floor(Math.random() * 1000) + 500;

  setTimeout(() => {
    isLoading.value = false;
  }, props.delay + randomInt);

})
</script>


<style scoped lang="scss">
h2 {
  margin-bottom: 0;
}

.clay-card {
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  width: 320px;
  height: 240px;
  margin: 20px 0;
  border-radius: 20px;
  color: #444;
  transition: transform 200ms, box-shadow 200ms;

  box-shadow: 20px 20px 30px 0px rgba(50, 50, 50, 0.8),
    inset -12px -12px 16px 0px rgba(155, 155, 155, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);

  &:hover {
    transform: scale(1.1);
    box-shadow: 20px 20px 50px 0px rgba(50, 50, 50, 0.8),
      inset -12px -12px 16px 0px rgba(155, 155, 155, 0.6),
      inset 0px 11px 28px 0px rgb(255, 255, 255);
  }
}

.clay-card-title {
  text-align: left;
  padding-left: 30px;
}

.clay-card-message {
  text-align: left;
  font-size: 18px;
}

.fadeCard-enter-active {
  transition: opacity 2s ease;
  transition-delay: v-bind(delayString);
}

.fadeCard-enter-from {
  opacity: 0;
}

.fadeText-enter-active {
  transition: opacity 1s ease;

  &.clay-card-message {
    transition-delay: 500ms;

  }
}

.fadeText-enter-from {
  opacity: 0;
}
</style>
