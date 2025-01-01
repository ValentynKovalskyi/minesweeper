import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Cell } from 'types/cell.type';
import { useField } from 'composables/useField';

export const useFieldStore = defineStore('field', () => {
   const isStarted = ref(false);
   const field = ref<Cell[][]>();
   const height = ref(10);
   const width = ref(10);
   const bombsCount = ref(25);

   function generate(firstCellX: number, firstCellY: number) {
      const { generateField } = useField();
      field.value = generateField(height.value, width.value, bombsCount.value, firstCellX, firstCellY);
   }


   return {
      isStarted,
      field,
      generate,
      height,
      width,
      bombsCount,
   }
})