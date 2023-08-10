<script setup>
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
import TheFooter from "./components/TheFooter.vue";
import TheTelBar from "./components/TheTelBar.vue";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
</script>

<template>
  <div class="container-fluid">
    <nav class="sticky-top navbar navbar-expand-xl navbar-light bg-light">
      <TopNav />
    </nav>
    <RouterView />
    <TheFooter />
    <TheTelBar />
  </div>
</template>

<style lang="scss">
@import "bootstrap";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../scss/style.scss";
$bootstrap-icons-font-src: url("bootstrap-icons/font/fonts/bootstrap-icons.woff2")
    format("woff2"),
  url("bootstrap-icons/font/fonts/bootstrap-icons.woff") format("woff");
@import "bootstrap-icons/font/bootstrap-icons.scss";
</style>
