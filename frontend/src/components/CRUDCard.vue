<script setup>
import { onMounted } from "vue";
import { useInstalatoriStore } from "../stores/instalatori.js";
import addInstalator from "../components/AddInstalator.vue";
import axios from "axios";
const props = defineProps(["id"]);
const instalatoriList = useInstalatoriStore();

onMounted(async () => {
  const response = await axios.get("http://127.0.0.1:3000/instalator/all");
  instalatoriList.list = response.data.slice();
  console.log(response.data.slice());
});

async function stergeInstalator(id) {
  await axios.delete("http://127.0.0.1:3000/instalator", { data: { id } });
  const list = instalatoriList.list.find((list) => list.id == props.id);
  list.splice(
    list.findIndex((item) => item.id == id),
    1
  );
}
</script>
<template>
  <div class="card" style="width: 22rem">
    <div class="card-body">
      <h4 class="card-title text-center fw-bold">Instalatorii</h4>
      <hr />
      <h5
        v-for="(list, index) in instalatoriList.list"
        :key="index"
        :id="list.id"
        class="card-subtitle mt-3 text-muted d-flex justify-content-between mx-2"
      >
        {{ instalatoriList.list[index].nume }} {{ instalatoriList.list[index].prenume }}
        <button
          @click="stergeInstalator(instalatoriList.list[index].id)"
          title="Sterge"
          class="butonX"
        >
          X
        </button>
      </h5>
    </div>
    <addInstalator />
  </div>
</template>

<style lang="scss">
.butonX {
  border: none;
  background-color: transparent;
  text-decoration: none;
  color: #d42727;
  font-weight: 600;
}
.card {
  margin: 3rem;
}

@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../../scss/style.scss";
</style>
