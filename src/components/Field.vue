<template>
    <div class="grid" :style="fieldGridStyle">
        <template v-for="(row, index) in field" :key="index">
            <Cell v-for="cell in row" :cell="cell" :key="cell.id" @clicked="handleClick"/>
        </template>
    </div>
</template>
<script setup lang="ts">
import { useFieldStore } from '@/stores/field';
import Cell from './Tile.vue';
import { storeToRefs } from 'pinia';
import type { Coords } from 'types/coords.type';
import { computed } from 'vue';

const { isStarted, field, height, width } = storeToRefs(useFieldStore());
const { resolve, stepOn } = useFieldStore();

function handleClick (coords: Coords) {
    if(isStarted.value) {
        stepOn(coords);
    } else {
        resolve(coords.x, coords.y)
        isStarted.value = true;
    }
}

const fieldGridStyle = computed(() => {
    return {
        gridTemplateColumns: `repeat(${width.value}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${height.value}, minmax(0, 1fr))`,
    }
})
</script>