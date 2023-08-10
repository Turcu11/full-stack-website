<script setup>
import CRUDCard from "../components/CRUDCard.vue";
import CRUDCardContact from "../components/CRUDCardContact.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useInstalatoriStore } from "../stores/instalatori.js";
const arataInstalatorii = ref(false);
const arataMesajele = ref(false);
const instalatoriList = useInstalatoriStore();

onMounted(async () => {
  const response = await axios.get("http://127.0.0.1:3000/instalator/all");
  console.log(response.data);
  instalatoriList.list = response.data.slice();
});
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="main">
        <h2 class="heading">
          CRUD stands for <span class="red">C</span>reate <span class="red">R</span>ead
          <span class="red">U</span>pdate <span class="red">D</span>elete
        </h2>
        <div>
          <button
            class="veziListe"
            v-if="!arataInstalatorii"
            @click="arataInstalatorii = true"
          >
            Arata instalatorii
          </button>
          <button class="veziListe" v-if="!arataMesajele" @click="arataMesajele = true">
            Arata mesajele
          </button>
        </div>
        <div class="cards">
          <div v-if="arataInstalatorii">
            <CRUDCard />
          </div>
          <div v-if="arataMesajele">
            <CRUDCardContact />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.veziListe {
  margin-left: 0.3rem;
  margin-right: 0.3rem;
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
.red {
  color: #d42727;
  font-weight: 700;
}
.cards {
  display: flex;
}
.heading {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.main {
  display: flex;
  flex-direction: column;
  background-size: 112rem;
  justify-content: center;
  align-items: center;
}

@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
