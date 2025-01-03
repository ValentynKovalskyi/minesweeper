<template>
  <main>
    <div class="flex flex-col items-center from-blue-950 to-blue-600 bg-gradient-to-t h-screen justify-center">
      <div class="flex flex-row items-center justify-evenly w-1/6 h-14">
        <GameStats :value="25" />
        <button class=" pixel font-bold border-2 m-2 px-3 bg-yellow-500 rounded-md text-white" @click="pregenerate()">CLICK</button>
        <GameStats :value="100" />
      </div>
      <Field class="w-fit" />
    </div>

  </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import Field from './components/Field.vue';
import GameStats from './components/GameStats.vue';
import { useFieldStore } from './stores/field';

const { pregenerate } = useFieldStore();

onMounted(() => {
  pregenerate();
})
</script>