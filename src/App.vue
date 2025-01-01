<script setup lang="ts">
import Field from './components/Field.vue';
import GameStats from './components/GameStats.vue';
import HelloWorld from './components/HelloWorld.vue'
import { useField } from './composables/useField';
import { useFieldStore } from './stores/field';

const { generate } = useFieldStore();
</script>

<template>
  <main>
    <div class="flex flex-col items-center from-blue-950 to-blue-600 bg-gradient-to-t h-screen justify-center">
      <div class="flex flex-row items-center justify-evenly w-1/2 h-14">
        <GameStats :value="25" />
        <button class="font-bold border-2 m-2 px-3 bg-yellow-500 rounded-md text-white" @click="generate(1,1)">Click</button>
        <GameStats :value="100" />
      </div>
      <Field class="w-fit" />
    </div>

  </main>
</template>
