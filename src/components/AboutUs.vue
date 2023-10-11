<script setup>

import PriceTier from "@/components/PriceTier.vue";
</script>

<template>
  <div class="about-us-bg">
    <div class="vertical-div">
      <h1>How it works</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu metus ex. Curabitur vel ligula augue.

        Nullam maximus tempor libero, ac auctor metus pellentesque eu. Nulla efficitur erat quis rutrum tempus.
        In pulvinar ut dolor non placerat. Donec placerat sed odio tincidunt venenatis. Praesent ut iaculis magna. </p>
    </div>

    <div class="vertical-div">
      <h1>Pricing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu metus ex. Curabitur vel ligula augue. </p>
      <PriceTier/>
    </div>

    <div class="vertical-div">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu metus ex. Curabitur vel ligula augue. </p>
    </div>
  </div>
</template>

<style scoped>
  .about-us-bg h1 {

    font-family: "Roboto Light",sans-serif;
    font-size: xx-large;
    color: white;
    margin: 0;
    padding: 2vw;
    text-align: left;
    letter-spacing: 0.15vw;
  }

  .about-us-bg p {
    font-family: "Roboto Light",sans-serif;
    color: white;
    margin: 0;
    padding-top: 0.5vw;
    padding-left: 2vw;
    font-size: large;
    letter-spacing: 0.15vw;
    line-height: 2;
  }

  .about-us-bg {
    display: flow;
    justify-content: center;
    background-color: #0000F0;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: -1;
    padding-bottom: 10vh;
  }

  .vertical-div {
    margin-bottom: 3vh;
  }

</style>