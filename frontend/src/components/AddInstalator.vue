<script setup>
import {ref} from "vue"
import AddInstalatorForm from "../components/AddInstalatorForm.vue";
const arataFormular = ref(false);
</script>

<template>
  <div class="card-body">
    <h5 class="card-title d-flex justify-content-center">
      <button v-if="!arataFormular" @click=" arataFormular = true" class="adauga">Adauga +</button>
      <button v-if="arataFormular" @click=" arataFormular = false" class="adauga">Inchide</button>
    </h5>
    <div v-if="arataFormular"> <AddInstalatorForm /></div>
  </div>
</template>

<style lang="scss">
.adauga {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  border: none;
  border-radius: 20px;
  background-color: #d42727;
  font-weight: 600;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
}
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
