import { defineStore } from 'pinia'

export const useInstalatoriStore = defineStore('instalatoriList', {
  state: () => {
    return {
      list: []
    }
  },
})
