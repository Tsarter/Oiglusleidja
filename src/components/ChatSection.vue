<script setup>
import ChatInput from './ChatInput.vue';
import { NCard } from 'naive-ui'
</script>

<template>
  <div class="chat-container">
    <!-- <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="message">
        <div v-if="message.isBot" class="bot-message">{{ message.paragraph }}</div>
        <div v-else class="user-message">{{ message.text }}</div>
      </div>
    </div> -->
      <h1>{{ input }} </h1>
      <div class="response-wrapper">
      <div class="api-response">
          <div v-for="responseItem in apiResponse" :key="responseItem.article_id">

                    <n-card :title="`${responseItem.paragraph_title}`" size="small">
                        {{ getTruncatedSummary(responseItem.paragraph, 420) }} <br>
                        <a :href="`https://www.riigiteataja.ee/en/eli/${responseItem.article_id}#${responseItem.paragraph_id}`" target="_blank">www.riigiteataja.ee</a>
                    </n-card>

        </div>
    </div>
        <div class="api-summary">
            <n-card title="Summary" size="small">
                {{ apiSummary }}
            </n-card>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
      apiResponse: [],
      input: "Loading..",
      apiSummary: "Loading.. (might take up to 15sec)",
    };
  },
  created() {
    // Access the query parameter from the URL
    const messageFromQuery = this.$route.query.message;

    if (messageFromQuery) {
      // Append the user's message to the messages array
      this.addUserMessage(messageFromQuery);
    }
  },
  methods: {
    addUserMessage(userMessage) {
      this.input = userMessage;
      this.sendMessageToAPI(userMessage);
    },
    sendMessageToAPI(userMessage) {
      const apiUrl = "https://api.lawlocater.com/query";
      const requestBody = { query: userMessage };

      axios
        .post(apiUrl, requestBody)
        .then((response) => {
          console.log(response);
          // Assuming the API response contains a "response" field
        this.apiResponse = response.data;
        this.sendMessageToApiSummarise(response.data, userMessage);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    sendMessageToApiSummarise(apiResponse, userMessage) {
    const paragraphs2 = apiResponse.map((item) => item.paragraph);
      const apiUrl = "https://api.lawlocater.com/answer";
      const requestBody = { paragraphs: paragraphs2, query: userMessage };
      console.log("requestBody", requestBody)

      axios
        .post(apiUrl, requestBody)
        .then((response) => {
          console.log(response);
          // Assuming the API response contains a "response" field
        this.apiSummary = response.data.answer;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getTruncatedSummary(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        // Truncate the text and add ellipsis
        return text.slice(0, maxLength) + "…";
      }
    },
    },
};
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 50vh;
    padding: 5vw;
    padding-top: 12rem;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
}

.message {
    margin-bottom: 10px;
}

.bot-message {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 10px;
    align-self: flex-start;
}

.user-message {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    align-self: flex-end;
}

.chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
}

.chat-input input {
    flex: 1;
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
}

.chat-input button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
.api-response {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding-bottom: 2rem;
}
.api-response .n-card {
    border-radius: .4rem;
    max-width: 25vw;
    min-width: 10rem;
}
.api-summary {
    max-width: 40rem;
}
</style>
