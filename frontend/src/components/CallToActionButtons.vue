<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <button
      type="button"
      class="mt-4 call-to-action-button-size rounded-pill btn text-bg-light"
    >
      <RouterLink class="no-decoration red-text fw-bold h5 simple-link" to="contact"
        >Contacteaza-ne</RouterLink
      >
    </button>
  </div>
  <div class="col d-row">
    <button
      type="button"
      class="d-none d-xl-block mt-4 call-to-action-button-size rounded-pill btn about-us-button me-4"
    >
      <RouterLink class="no-decoration text-light fw-bold h5" to="despreNoi"
        >Despre noi</RouterLink
      >
    </button>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
