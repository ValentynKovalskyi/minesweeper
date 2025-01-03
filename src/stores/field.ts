import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type BaseTile, type ResolvedTile } from 'types/cell.type';
import { useField } from 'composables/useField';
import type { Coords } from 'types/coords.type';

export const useFieldStore = defineStore('field', () => {
   const isStarted = ref(false);
   const field = ref<BaseTile[][] | ResolvedTile[][]>();
   const height = ref(10);
   const width = ref(10);
   const bombsCount = ref(25);
   const flagueCount = ref(bombsCount.value)

   const { pregenerateField } = useField();

   function pregenerate() {
      field.value = pregenerateField(height.value, width.value);
      console.log(field.value.map((s) => s.map((d) => d.id)).join(' '));
   }

   function resolve(firstCellX: number, firstCellY: number) {
      if(!field.value) {
         throw new Error('Field must be pregenerated before resolving')
      }
      
      let bombsRemaining = bombsCount.value;
      const bombsCoords: Coords[] = [];

      while(bombsRemaining) {
          let x = Math.round(Math.random() * width.value)
          let y = Math.round(Math.random() * height.value)

          if(x === firstCellX && y === firstCellY) continue;
          else if(bombsCoords.some(xy => xy.x === x && xy.y === y)) continue;
          else {
              bombsCoords.push({x, y});
              --bombsRemaining;
          }
      }

      //resolving of field
      for (let i = 0; i < height.value; ++i) {
          const row = field.value[i] as ResolvedTile[];
          for (let j = 0; j < width.value; ++j) {
              row[j] = {
               ...row[j],
               isBomb: bombsCoords.some((coords) => coords.x === j && coords.y === i),
               isStepped: j === firstCellX && i === firstCellY,
              } as ResolvedTile;
          }
      }

      //pregeneration of digits
      for (let i = 0; i < height.value; ++i) {
          for (let j = 0; j < width.value; ++j) {
            const tileForDigit = field.value[i][j] as ResolvedTile;
            let calculatedDigit = 0;
            for(let row = i - 1; row <= i + 1 && row < height.value; ++row) {
               if(row < 0 || row > height.value) continue;
               for(let col = j - 1; col <= j + 1 && col < width.value; ++col) {
                  const tileToCheck = field.value[row][col] as ResolvedTile;
                  if(col < 0 || col > width.value) continue;
                  if(tileToCheck.isBomb) {
                     ++calculatedDigit;
                  }
               }
            }
            tileForDigit.digit = calculatedDigit;
         }
      }
  }

  function stepOn(coords: Coords) {
   if(field.value) {
      const tile = field.value[coords.y][coords.x] as ResolvedTile;
      tile.isStepped = true;
   }
  }
  
   return {
      isStarted,
      field,
      height,
      width,
      bombsCount,
      flagueCount,
      pregenerate,
      resolve,
      stepOn,
   }
})