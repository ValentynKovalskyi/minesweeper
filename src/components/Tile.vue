<template>
    <div :class="styleClasses"
    @click="emit('clicked', { x: cell.x, y: cell.y })">
    <template v-if="isResolvedTile(cell)">
        <div :class="innerCellStyle" v-if="cell.isFlagued">f</div>
        <div :class="innerCellStyle" v-else-if="cell.isStepped">
            <div :class="innerCellStyle" v-if="cell.isBomb">*</div>
            <div :class="innerCellStyle" v-else>{{ cell.digit || '' }}</div>
        </div>
    </template>
    </div>
</template>
<script setup lang="ts">
import type { Coords } from 'types/coords.type';
import type { CellProps } from 'types/props';
import { isResolvedTile } from '@/utils/helpers/typeGuard.helper';
import { computed, ref } from 'vue';
import { TILESTYLE } from '@/utils/constants/tileClassStyle.constant';
import type { ResolvedTile } from 'types/cell.type';
import { DIGITCOLOR } from '@/utils/constants/digitColor.constant';
//TODO: Optimize imports with aliases vite
const props = defineProps<CellProps>();
const emit = defineEmits<{
    (e: 'clicked', coords: Coords): void
}>()

const styleClasses = computed(() => {
    const tile = props.cell as ResolvedTile;

    return {
        [TILESTYLE.BASE]: true,
        [TILESTYLE.BEFORESTEP]: !tile.isStepped,
        [TILESTYLE.STEPPED]: tile.isStepped && !tile.isBomb,
        [TILESTYLE.STEPPEDBOMB]: tile.isStepped && tile.isBomb,
        [DIGITCOLOR[tile.digit || 0]]: !tile.isBomb,
    }
})

const innerCellStyle = ref(TILESTYLE.INNER)
</script>