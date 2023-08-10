<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { arataMesaj } from "../stores/arataMesaj.js";
const useArataMesaj = arataMesaj();
const props = defineProps(["id"]);

onMounted(async () => {
  const response = await axios.get("http://127.0.0.1:3000/contact/all");
  useArataMesaj.list = response.data.slice();
  console.log(response.data.slice());
});

async function stergeMesaj(id) {
  await axios.delete("http://127.0.0.1:3000/contact", { data: { id } });
  const list = useArataMesaj.list.find((list) => list.id == props.id);
  list.splice(
    list.findIndex((item) => item.id == id),
    1
  );
}
</script>
<template>
  <div class="card" style="width: 26rem">
    <div class="card-body">
      <h4 class="card-title text-center fw-bold">Mesaje din DB</h4>
      <hr />
      <h5
        v-for="(list, index) in useArataMesaj.list"
        :key="index"
        :id="list.id"
        class="card-subtitle mt-3 text-muted d-flex justify-content-between mx-2"
      >
        {{ useArataMesaj.list[index].prenume }} @ {{ useArataMesaj.list[index].compania }}
        "{{ useArataMesaj.list[index].mesaj }}"
        <button
          @click="stergeMesaj(useArataMesaj.list[index].id)"
          title="Sterge"
          class="butonX"
        >
          X
        </button>
      </h5>
    </div>
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
