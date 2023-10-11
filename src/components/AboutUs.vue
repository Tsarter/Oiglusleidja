<script setup>

import PriceTier from "@/components/PriceTier.vue";
</script>

<template>
  <div class="about-us-bg">
    <div class="vertical-div">
      <h1>How it works</h1>
      <p> We have trained our model on 50+ acts on www.riigiteataja.ee​ <br>
        1. Fetch XML of laws and extract the paragraphs ​<br>
        2. Convert to AI embeddings​ <br>
        3. Retrieve most close documents to the user query​ <br>
        4. Feed the top documents to gpt-3.5 to generate the answer </p>
    </div>

    <div class="vertical-div">
      <h1>Pricing</h1>
      <p>Free tier is suitable for most users, but we also offer a premium tier for professionals. </p>
      <PriceTier/>
    </div>

    <div class="vertical-div">
      <h1>About Us</h1>
      <p>This idea was hacked together during the Hackathon: Digital State Future Solutions. </p>
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