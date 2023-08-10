<script setup>
import { RouterLink } from "vue-router";
import NavLinks from "./NavLinks.vue";
</script>

<template>
  <RouterLink to="/" class="navbar-brand">
    <img src="images/icon.png" alt="logo" class="ms-5" />
    <span class="ms-3 fw-bold">Turcu Instal</span>
  </RouterLink>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"> </span>
  </button>
  <NavLinks />
</template>

<style lang="scss">
@import "bootstrap";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";

$bootstrap-icons-font-src: url("bootstrap-icons/font/fonts/bootstrap-icons.woff2")
    format("woff2"),
  url("bootstrap-icons/font/fonts/bootstrap-icons.woff") format("woff");
@import "bootstrap-icons/font/bootstrap-icons.scss";
</style>
