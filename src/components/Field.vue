<template>
    <div :class="['grid', `grid-cols-10`, `grid-rows-10`,]">
        <template v-for="row in field">
            <Cell v-for="cell in row" :cell="cell" :key="cell.id" @clicked="handleClick"/>
        </template>
    </div>
</template>
<script setup lang="ts">
import { useFieldStore } from '@/stores/field';
import Cell from './Cell.vue';
import { storeToRefs } from 'pinia';
import type { Coords } from 'types/coords.type';

const { isStarted, field, height, width } = storeToRefs(useFieldStore());
const { generate } = useFieldStore();
function handleClick (coords: Coords) {
    if(isStarted.value) {
        
    } else {
        generate(coords.x, coords.y)
        isStarted.value = true;
    }
}
</script>