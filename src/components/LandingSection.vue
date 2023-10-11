
<script setup>
import ChatInput from './ChatInput.vue';
import AboutUs from "@/components/AboutUs.vue";
</script>
<template>
    <div class="landingSectionImg">
        <!-- <img src="assets/raba.jpeg" alt="Big Image"> -->
        <div id="chat-input-wrapper">
            <ChatInput />
        </div>
    </div>
  <div>
    <AboutUs/>
  </div>
</template>

<style>
.landingSectionImg {
    display: flex;
    justify-content: center;
    background-image: url("/assets/raba.webp");
    background-size: cover;
    background-position: center;
    top: 0rem;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;

}
.landingSectionImg::before {
  content: "";
  position: absolute;
  top: 20%; 
  left: 0;
  width: 100%;
  height: 80%;
  background: linear-gradient(rgba(0, 0, 240, 0), rgb(0, 0, 0)); /* Adjust the colors and opacity as needed */
  z-index: 0;
}
#chat-input-wrapper {
    position: absolute;
    bottom: 40vh;
    display: flex;
    justify-content: center;
}
</style>