<template>
    <header class="header">
      <div class="logo">
        <!-- Add your logo image or SVG here -->
        <img src="/assets/Logo.svg" alt="Logo" />
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
        companyName: "Õigusotsing",
      };
    },
  };
  </script>
  
  <style scoped>
  .header {
    /* background-color: #007bff; */
    color: #fff;
    position: relative;
    padding: 0;
    display:flex;
  }
  
  .logo img {
    width: 50px; /* Adjust the width as needed */
    height: auto;
  }
  
  .company-name h1 {
    font-size: 24px;
    margin: 0;
  }
  
  .wave-container{
    background: hsla(0,0%,100%,0);
    text-align: center;
    overflow: hidden;
    position: absolute;
    width: 100vw;
    top: 0;
    z-index: -1;
  }
  </style>
  