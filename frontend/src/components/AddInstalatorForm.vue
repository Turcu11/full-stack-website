<script setup>
import { addInstalatoriStore } from "../stores/addInstalator";
import { useInstalatoriStore } from "../stores/instalatori.js";
import axios from "axios";
const instalatoriStore = addInstalatoriStore();
const instalatoriList = useInstalatoriStore();

async function veziDB(){
  const response = await axios.get("http://127.0.0.1:3000/instalator/all");
  instalatoriList.list = response.data.slice();
  console.log(response.data.slice());
};

async function adaugaInstalatorul() {
  if (
    instalatoriStore.nume != "" &&
    instalatoriStore.prenume != "" &&
    instalatoriStore.departament != 0
  ) {
    const noulInstalator = await axios.post("http://127.0.0.1:3000/instalator", {
      nume: instalatoriStore.nume,
      prenume: instalatoriStore.prenume,
    });
    console.log("nou instalator adaugat: ", noulInstalator);
    instalatoriStore.clearStore();
    veziDB()
  } else alert("Pune toate datele in formular!!!");
}

</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <div class="input-group mt-3 mb-3">
      <input
        v-model="instalatoriStore.nume"
        id="nume"
        type="text"
        class="form-control rounded-pill contact-input"
        placeholder="Nume"
        aria-label="Nume"
      />
    </div>
    <div class="input-group mb-3">
      <input
        v-model="instalatoriStore.prenume"
        id="prenume"
        type="text"
        class="form-control rounded-pill contact-input"
        placeholder="Prenume"
        aria-label="Prenume"
      />
    </div>
    <div class="input-group mb-3">
      <input
        v-model="instalatoriStore.departament"
        id="departament"
        type="number"
        class="form-control rounded-pill contact-input"
        placeholder="Departament"
        aria-label="Departament"
      />
    </div>
    <button @click="adaugaInstalatorul" class="adauga" type="submit">Adauga in DB</button>
  </div>
</template>
