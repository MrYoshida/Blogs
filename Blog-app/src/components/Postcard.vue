<script setup>
import { defineProps } from 'vue';
const props= defineProps({
    postprop: Object
})

</script>

<template>
    <div class="rounded-lg shadow-lg p-4 post-card">
      <h3 class="text-md text-black font-bold ">{{ postprop.title }}</h3>
        <!-- <p class="text-black">{{ post.body }}</p> -->
    </div>
  </template>
    
