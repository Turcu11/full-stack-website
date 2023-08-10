<script setup>
import PricesCards from "../components/PricesCards.vue";
</script>
<template>
  <div class="container-fluid">
    <div class="row pb-5 mb-5">
      <div class="col-lg-4">
        <div class="mt-5 pt-5 size-for-services">
          <h1 class="fw-bold text-center">Cu ce tarife lucrăm ?</h1>
          <img class="pb-5 pt-4 img-fluid" src="images/euro.png" alt="phone" />
        </div>
      </div>
      <div
        class="col-lg-4 d-flex align-items-end justify-content-center text-center text-lg-start"
      >
        <div class="row">
          <h1 class="pb-3 pt-5 fw-semibold">Transparent 100%</h1>
          <h4 class="fw-normal">
            Toate prețurile noastre conțin TVA
            <br />Prețurile se stabilesc în funcție de <br />tipul, complexitatea si
            durata lucrării.
          </h4>
        </div>
      </div>
    </div>
    <PricesCards />
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
