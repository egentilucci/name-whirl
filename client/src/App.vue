<template>
  <div>
    <h1>Name Whirl: Spinnning Wheel</h1>
    <Spinner :options="options" />
  </div>
</template>

<script>
import Spinner from "./components/Spinner.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  components: {
    Spinner, // Register the spinner component
  },
  data() {
    return {
      options: [], // Initialize an empty array to store the data
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("http://localhost:3000/api/options")
      .then((response) => {
        this.options = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
        this.error = error;
        this.loading = false;
      });
  },
};
</script>

<style scoped></style>
