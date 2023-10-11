<template>
  <div class="price-tier">
    <div v-for="plan in plans" :key="plan.id" class="price-plan">
      <h2>{{ plan.name }}</h2>
      <p>{{ plan.description }}</p>
      <p class="price">{{ plan.price }}</p>
      <p>{{plan.price_small_text}}</p>
      <ul>
        <li v-for="feature in plan.features" :key="feature"> <i class="checkmark"></i> {{ feature }}</li>
      </ul>
      <a href="#">Get Started</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        {
          id: 1,
          name: 'Basic',
          price: '0,00€',
          price_small_text: 'per month per user',
          features: ['limited questions', 'simple answers'],
        },
        {
          id: 2,
          name: 'Premium',
          price: '49,99€',
          price_small_text: 'per month per user',
          features: ['Unlimited questions', 'personalised answers'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.price-tier {
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  padding-top: 2vh;
}

.price-plan {
  width: 30%;
  height: 40%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.price {
  font-size: 24px;
  color: black;
  font-family: "Roboto Light", sans-serif;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 3vh;
}

ul li {
  margin: 10px 0;

}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #0000F0;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-family: "Roboto Light", sans-serif;
  text-align: center;
  letter-spacing: 0.12vw;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

p {
  color: black;
  text-align: left;
}

.checkmark {
  background-image: url("src/assets/Checkmark.svg");
  background-repeat: no-repeat;
  background-position: 0 2px; /* Adjust the position as needed */
  padding-left: 2vw;
}

@media screen and (max-width: 800px) {
  .price-tier {
    flex-direction: column;
    align-items: center;
  }

  .price-plan {
    width: 80%;
    margin-bottom: 10%;
  }
}
</style>
