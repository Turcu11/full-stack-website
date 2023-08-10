<script setup>
import TeamCards from "../components/TeamCards.vue";
</script>

<template>
  <div class="cover-img" style="background-image: url(images/echipa.png)">
    <div class="color-overlay d-flex align-items-end">
      <div class="container-fluid d-flex justify-content-start mx-5 px-4">
        <h1 class="display-3 fw-bold pb-5">
          Faceti cunostinta, <br />
          cu echipa noastra
        </h1>
      </div>
    </div>
  </div>

  <div class="container d-flex justify-content-center align-items-center my-5">
    <div class="row">
      <div class="col">
        <h2 class="red-text fw-bold">Personalul nostru:</h2>
      </div>
    </div>
  </div>
  <TeamCards />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
