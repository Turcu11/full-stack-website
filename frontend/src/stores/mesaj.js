import { defineStore } from 'pinia'

export const useMesajStore = defineStore('mesajStore', {
  state: () => ({
    nume: "",
    prenume: "",
    compania: "",
    email: "",
    mesaj: ""
  }),
  getters: {
    getList: (state) => (id) => state.list.find((item) => item.id === id)
  },
  actions: {
    clearStore(){
        this.nume = "",
        this.prenume = "",
        this.compania = "",
        this.email = "",
        this.mesaj = ""
    }
  }

})