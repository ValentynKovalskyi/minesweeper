<template>
    <div class="pixel h-10 w-10 text-center font-bold bg-gray-300 border-4 border-t-gray-100 
    border-l-gray-100 border-b-gray-500 border-r-gray-500 cursor-pointer" 
    @click="emit('clicked', { x: props.cell.x, y: props.cell.y })">
        <span @dblclick.prevent>{{ props.cell.isBomb ? '*': props.cell.digit }}</span>
    </div>
</template>
<script setup lang="ts">
import type { Coords } from 'types/coords.type';
import type { CellProps } from 'interfaces/props';

const props = defineProps<CellProps>();
const emit = defineEmits<{
    (e: 'clicked', coords: Coords): void
}>()
</script>