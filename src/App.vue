<script setup>
import Header from './components/Header.vue';
import LandingSection from './components/LandingSection.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
    <Header />
    <!-- <LandingSection /> -->
  </div>
  <RouterView />
</template>

<style scoped>



</style>
