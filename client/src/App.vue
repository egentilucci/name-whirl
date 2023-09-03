<script setup>
import Spinner from "./components/Spinner.vue";
const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
</script>

<template>
  <div>
    <h1>Name Whirl: Spinnning Wheel</h1>
    <Component :is="Spinner" :options="options" />
  </div>
</template>

<style scoped></style>
