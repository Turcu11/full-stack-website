import { defineStore } from 'pinia'

export  const addInstalatoriStore = defineStore('addInstalator', {
  state: () => {
    return {
      nume: "",
      prenume: "",
      departament: 0
    }
  },
  actions: {
    clearStore() {
      this.nume = "",
      this.prenume = "",
      this.departament = 0
    }
  },
})