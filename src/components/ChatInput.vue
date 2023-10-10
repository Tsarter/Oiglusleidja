<template>
        <div class="chat-input">
            <input v-model="inputText" @keyup.enter="sendMessage" placeholder="Type your message here..." />
            <button @click="sendMessage">Send</button>
        </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            inputText: ''
        }
    },
    methods: {
        async sendMessage() {
            if (!this.inputText) return;
            this.messages.push({ id: Date.now(), text: this.inputText, isBot: false });
            this.inputText = '';
            try {
                const response = await fetch('https://your-server-url.com/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: this.inputText })
                });
                const data = await response.json();
                this.messages.push({ id: Date.now(), text: data.message, isBot: true });
            } catch (error) {
                console.error(error);
            }
        }
    }
}
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
    background-color: #007bff;
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