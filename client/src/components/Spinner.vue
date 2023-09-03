<template>
  <div id="app">
    <h3>{{ options }}</h3>
    <div class="wheel" :class="{ spinning: spinning }" @click="startSpinning">
      <div class="wheel-content">{{ selectedOption }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array, // Define the inputData prop
  },
  data() {
    return {
      spinning: false,
      // options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      selectedOption: "",
    };
  },
  methods: {
    startSpinning() {
      if (!this.spinning) {
        this.spinning = true;
        this.selectedOption = "";
        // Simulate a delay before selecting a random string
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * this.options.length);
          this.selectedOption = this.options[randomIndex];
          this.spinning = false; // Stop spinning when a string is selected
        }, 2000); // Adjust the delay time as needed
      }
    },
  },
};
</script>

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
  cursor: pointer; /* Add this to change cursor to pointer on hover */
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
