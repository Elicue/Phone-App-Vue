<script setup>
import icone_card from './IconeCard.vue';
defineProps(['text','url'])
</script>

<template>
  <div class="mb-8 rounded-lg shadow-lg hover:scale-105 transition-all">
    <img class="w-full" :src="url" alt="img">
    <div class="p-5">
      <slot name="title"><p class="uppercase text-xs">THÉMATIQUE 1</p></slot>
      <h4 class="font-semibold">Accueillir un.e collègue en situation de handicap</h4>
      <div class="flex flex-row w-9/12 justify-left pt-5">
        <slot name="icone"></slot>
      </div>
    </div>
  </div>
</template>
