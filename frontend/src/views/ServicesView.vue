<script setup>
import ServicesCards from "../components/ServicesCards.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row pb-5 mb-5">
      <div class="col-lg-4">
        <div class="mt-5 pt-5 size-for-services">
          <h1 class="fw-bold text-center">Ce oferim noi ?</h1>
          <img class="pb-5 pt-4 img-fluid" src="images/servicii.png" alt="phone" />
        </div>
      </div>
      <div
        class="col-lg-4 d-flex align-items-end justify-content-center text-center text-lg-start"
      >
        <div class="row">
          <h1 class="pb-3 pt-5 fw-semibold">Soluții complete</h1>
          <h4 class="fw-normal">
            Indiferent de proiectul dvs. compania <br />
            noastră vă pune la dispoziție soluții <br />
            complete pentru înstalații atât <br />
            rezidențiale cât și industriale.
          </h4>
        </div>
      </div>
    </div>
    <div
      class="row container-fluid my-5 d-flex justify-content-around align-items-center"
    >
      <ServicesCards />
    </div>
  </div>
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
