<script setup>
import Header from "./components/Header.vue";
import Spinner from "./components/Spinner.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <component :is="Header" />
    <Component :is="Spinner" />
    <Component :is="Footer" />
  </div>
</template>

<style scoped></style>
