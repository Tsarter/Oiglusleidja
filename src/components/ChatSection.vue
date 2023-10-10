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
        <ChatInput />
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



</style>
