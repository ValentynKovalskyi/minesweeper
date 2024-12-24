import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Cell } from 'types/cell.type';
import { useField } from 'composables/useField';

export const useFieldStore = defineStore('field', () => {
   const field = ref<Cell[][]>();
   const height = ref<number>(10);
   const width = ref<number>(10);
   const bombsCount = ref<number>(25);

   function generate() {
      const { generateField } = useField();
      field.value = generateField(height.value, width.value, bombsCount.value);
   }

   function setHeight(newHeight: number) {
      height.value = newHeight;
   }

   function setWidth(newWidth: number) {
      width.value = newWidth;
   }

   function setBombsCount(newBombsCount: number) {
      bombsCount.value = newBombsCount;
   }

   return {
      field,
      generate,
      setHeight,
      setWidth,
      setBombsCount,
   }
})