<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  options: Array,
});

const spinning = ref(false);
const selectedOption = ref("");

const startSpinning = () => {
  if (!spinning.value) {
    spinning.value = true;
    selectedOption.value = "";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * props.options.length);
      selectedOption.value = props.options[randomIndex];
      spinning.value = false;
    }, 2000);
  }
};
</script>

<template>
  <div id="app">
    <h3>{{ options }}</h3>
    <div class="wheel" :class="{ spinning }" @click="startSpinning">
      <div class="wheel-content">{{ selectedOption }}</div>
    </div>
  </div>
</template>

<style scoped>
.wheel {
  width: 200px;
  height: 200px;
  border: 10px solid #007bff;
  border-top: 10px solid transparent;
  border-radius: 50%;
  margin: 20px auto;
  position: relative;
  transform-origin: 50% 50%;
  transition: transform 2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  cursor: pointer;
}

.wheel-content {
  font-size: 20px;
  text-align: center;
  padding-top: 80px;
  font-weight: bold;
}

.spinning {
  animation: spin 2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  animation-fill-mode: forwards;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
}
</style>
