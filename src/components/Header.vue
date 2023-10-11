<template>
    <header class="header">
      <div class="logo">
        <!-- Add your logo image or SVG here -->
        <router-link to="/">
       <!--  <img src="/assets/Logo.svg" alt="Logo" /> -->
        <img src="/assets/lawFinder.png" alt="Logo" />
      </router-link>
      </div>
      <div class="company-name">
        <!-- Add your company name here -->
        <h1>{{ companyName }}</h1>
      </div>
      
    </header>
    <div class="wave-container">
        <img src="/assets/wavy.svg" alt="Logo" />

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        companyName: "Õigusleidja",
      };
    },
  };
  </script>
  
  <style scoped>
  .header {
    /* background-color: #007bff; */
    color: #fff;
    position: absolute;
    padding: 0;
    display:flex;

    align-items: center;
    z-index: 3;
    padding-top: .5rem;
    padding-left: .5rem;
    gap: 1rem;
  }
  
  .logo img {
    width: 5vw; /* Adjust the width as needed */
    min-width: 8rem;
    max-width: 16rem;
    height: auto;
    
  }
  
  .company-name h1 {
    margin: 0;
    letter-spacing: 0.15em;
  }
  
  .wave-container{
    background: hsla(0,0%,100%,0);
    text-align: center;
    overflow: hidden;
    position: absolute;
    width: 100vw;
    top: 0;
    z-index: 2;
  }
  </style>
  