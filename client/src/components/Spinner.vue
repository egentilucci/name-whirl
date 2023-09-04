<script setup>
import { ref } from "vue";

const options = ref(["test1", "test2", "test3"]);
const newOption = ref("");
const spinning = ref(false);
const selectedOption = ref("");

const startSpinning = () => {
  if (!spinning.value) {
    spinning.value = true;
    selectedOption.value = "";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.value.length);
      selectedOption.value = options.value[randomIndex];
      spinning.value = false;
    }, 2000);
  }
};

const addOption = () => {
  if (newOption.value.trim() !== "") {
    options.value.push(newOption.value);
    newOption.value = "";
  }
};

function removeOption(option) {
  options.value.splice(options.value.indexOf(option), 1);
}
</script>

<template>
  <div id="app">
    <input
      v-model="newOption"
      @keyup.enter="addOption"
      placeholder="Add a name"
    />
    <div v-for="(option, index) in options" :key="index" class="option">
      {{ option }}
      <button class="remove-btn" @click="removeOption(option)">x</button>
    </div>
    <div>
      <div v-if="options.length > 1">
        You added {{ options.length }} names, let's spin!!! ٩(^ᗜ^ )و
      </div>
      <div v-else-if="options.length === 1">
        You added 1 name, the result is somewhat predictable :D
      </div>
      <div v-else>You added no names, nothing to spin ˙◠˙</div>
    </div>
    <div class="wheel" :class="{ spinning }" @click="startSpinning">
      <div class="wheel-content">{{ selectedOption }}</div>
    </div>
  </div>
</template>

<style scoped>
.remove-btn {
  background-color: transparent;
  border: 1px solid white;
  border-color: white;
  color: white;
  text-align: center;
  border-radius: 25%;
}
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
