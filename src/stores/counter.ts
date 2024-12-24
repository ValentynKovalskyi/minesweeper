import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Cell } from 'types';

export const useCounterStore = defineStore('counter', () => {
  const field = ref<Cell[]>()
  /*const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }*/

  return { field }
})
