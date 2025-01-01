<template>
    <span class="pixel text-gray-200 text-2xl h-10 p-1 w-17">{{ value }}</span>
</template>
<script setup lang="ts">
defineProps<{value: number}>()
</script>