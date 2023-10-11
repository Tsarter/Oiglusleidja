<template>
    
        <div class="chat-input">
            
            <input v-model="message" @keyup.enter="sendMessage" placeholder="Ask me..." />
            
                <button @click="sendMessage">Send</button>
                
        </div>
        
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      // Navigate to the chat page with the message as a parameter
      this.$router.push("/chat?message=" + this.message);
    },
  },
};
   
</script>
<style scoped>
.chat-input {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.chat-input button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #0000F0;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
.chat-input input {
    flex: 1;
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
}
</style>