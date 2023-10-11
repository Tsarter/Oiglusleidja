<script setup>
import ChatInput from './ChatInput.vue';
</script>

<template>
    <div class="chat-container">
        <div class="chat-messages">
            <div v-for="message in messages" :key="message.id" class="message">
                <div v-if="message.isBot" class="bot-message">{{ message.text }}</div>
                <div v-else class="user-message">{{ message.text }}</div>
            </div>
        </div>
        <div>
        <h1>Chat Page</h1>
        <p>Received message: {{ input }}</p>
        <!-- <button @click="sendMessageToAPI">Send Message to API</button> -->
    </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
      input: "",
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
      axios
        .post("https://example.com/api/chat", { message: userMessage })
        .then((response) => {
          console.log(response.data);
          this.messages.push({ text: response.data, isBot: true });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 50vh;
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
</style>
