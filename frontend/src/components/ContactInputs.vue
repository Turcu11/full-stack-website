<script setup>
import { useMesajStore } from "../stores/mesaj.js";
const mesajStore = useMesajStore();
import axios from "axios";

async function trimite() {
  if (
    mesajStore.nume != "" &&
    mesajStore.prenume != "" &&
    mesajStore.email != "" &&
    mesajStore.mesaj != ""
  ) {
    const mesaj = await axios.post("http://127.0.0.1:3000/contact", {
      nume: mesajStore.nume,
      prenume: mesajStore.prenume,
      compania: mesajStore.compania,
      email: mesajStore.email,
      mesaj: mesajStore.mesaj,
    });
    console.log("mesaj:", mesaj);
    mesajStore.clearStore();
  } else alert("Pune toate datele in formular!!!");
}
</script>

<template>
  <div class="col">
    <div class="size-for-contact mx-4 px-4">
      <h4 class="text-center fw-light mb-5">
        Sau, poți să ne lași un mesaj <br />
        și te vom contacta noi.
      </h4>
      <div class="input-group mb-3">
        <input
          v-model="mesajStore.nume"
          type="text"
          class="form-control rounded-pill contact-input"
          placeholder="  Nume"
          aria-label="Nume"
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="mesajStore.prenume"
          type="text"
          class="form-control rounded-pill contact-input"
          placeholder="  Prenume"
          aria-label="Prenume"
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="mesajStore.compania"
          type="text"
          class="form-control rounded-pill contact-input"
          placeholder="  Compania*"
          aria-label="Compania*"
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="mesajStore.email"
          type="text"
          class="form-control rounded-pill contact-input"
          placeholder="  Email"
          aria-label="Email*"
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="mesajStore.mesaj"
          type="text"
          class="form-control your-message contact-input"
          placeholder="  Scrie mesajul tau"
          aria-label="Scrie mesajul tau*"
        />
      </div>
      <div class="fw-lighter pt-3">
        <small
          >Apăsând trimite ești de <span class="fw-semibold">acord</span> cu
          <a href="#">termenii</a> și <a href="#">condițiile</a></small
        >
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button @click="trimite" class="btn btn-block submit-button" type="submit">
          Trimite
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
