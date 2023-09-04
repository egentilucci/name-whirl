<script setup>
import { ref } from "vue";

import Header from "./components/Header.vue";
import Spinner from "./components/Spinner.vue";
import Footer from "./components/Footer.vue";

import SpinningWheel from "./components/SpinningWheel.vue";

const segments = ref([
  { id: 1, slice: { fill: "green" }, label: { text: "Option1" } },
  { id: 2, slice: { fill: "red" }, label: { text: "Option2" } },
  { id: 3, slice: { fill: "orange" }, label: { text: "Option3" } },
  { id: 4, slice: { fill: "yellow" }, label: { text: "Option4" } },
  { id: 5, slice: { fill: "blue" }, label: { text: "Option5" } },
]);
const winners = ref([]);
const result = ref(null);
</script>

<template>
  <div>
    <component :is="Header" />

    <component :is="SpinningWheel" :segments="segments" :skip="winners" />

    <component :is="Spinner" />

    <component :is="Footer" />
  </div>
</template>

<style scoped></style>
