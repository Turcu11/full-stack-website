<script setup>
import ContactInputs from "../components/ContactInputs.vue";
import ContactInfo from "../components/ContactInfo.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4">
        <div class="size-for-contact">
          <h1 class="pt-5 mt-5 fw-bold text-center">
            Hai sa <br />
            discutam
          </h1>
          <img class="pb-5 px-4 img-fluid" src="images/phone.png" alt="phone" />
        </div>
      </div>
      <ContactInfo />
      <ContactInputs />
    </div>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
