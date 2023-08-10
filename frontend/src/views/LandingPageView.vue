<script setup>
import LandingCards from "../components/LandingCards.vue";
import CallToActionButtons from "../components/CallToActionButtons.vue";
</script>

<template>
  <div class="cover-img" style="background-image: url(images/plumber.png)">
    <div class="color-overlay d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="display-3 fw-bold mb-5">
              Vă oferim soluții complete <br />
              pentru instalații
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img class="mt-5 d-none d-md-block" src="images/stelute.png" alt="stelute" />
            <h3 class="mx-2 d-none d-md-block my-5 pb-5">Calitate garantată !</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-2 me-5 d-row">
            <CallToActionButtons />
          </div>
        </div>
      </div>
    </div>
  </div>
  <LandingCards />
</template>

<style lang="scss">
@import "bootstrap";

@import "../node_modules/bootstrap/scss/bootstrap.scss";

$red-color: #d42727;

.red-text {
  color: $red-color;
  text-decoration: none;
  font-weight: 200;
}

.simple-link {
  text-decoration: none;
}

.cover-img {
  background-size: cover;
  min-height: 95vh;
  position: relative;
  color: white;
}

.color-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.card-width-about-us {
  width: 26rem;
}

.card-width-services {
  width: 22rem;
}

.card-width-prices {
  width: 24rem;
  height: 15rem;
}

.card-width-home {
  width: 26rem;
  height: 12rem;
}

.bottom-tel {
  width: auto;
  height: 3rem;
  background-color: $red-color;
}

.no-decoration {
  text-decoration: none;
}

.call-to-action-button-size {
  width: 14rem;
  height: 4rem;
}

.about-us-button {
  background-color: $red-color;
}

.elipse-position {
  position: relative;
  top: 4.5rem;
  left: -3.5rem;
}

.title-position {
  position: relative;
  left: 18rem;
  bottom: 3rem;
}

.size-for-contact {
  display: flex !important;
  flex-direction: column;
  width: auto;
  height: 57rem;
  align-items: center;
  justify-content: center;
}

.size-for-services {
  display: flex !important;
  flex-direction: column;
  width: auto;
  height: 30rem;
  align-items: center;
}

@media (max-width: 768px) {
  .cover-img {
    min-height: 35vh;
  }
}

.contact-input {
  border-color: #d42727;
}

.your-message {
  height: 8rem;
  border-radius: 1.3rem;
}

.submit-button {
  margin-top: 4rem;
  background-color: #d42727;
  font-size: large;
  color: white;
  border-radius: 1.3rem;
}

$bootstrap-icons-font-src: url("bootstrap-icons/font/fonts/bootstrap-icons.woff2")
    format("woff2"),
  url("bootstrap-icons/font/fonts/bootstrap-icons.woff") format("woff");
@import "bootstrap-icons/font/bootstrap-icons.scss";
</style>
