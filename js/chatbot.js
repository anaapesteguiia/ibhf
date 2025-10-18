// ASISTENTE VIRTUAL

// Constantes
const webhookUrl = 'https://gitagirlss.app.n8n.cloud/webhook/42560b42-f8b6-4531-9c14-72402674568b/chat';
const messagesContainer = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');


// Obtiene o genera un sessionId persistente
let sessionId = sessionStorage.getItem('sessionId');
if (!sessionId) {
    sessionId = generateUUID();
    sessionStorage.setItem('sessionId', sessionId);
}


// Función que "envía" un mensaje al asistente
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    if (messagesContainer.children.length > 50) {
        messagesContainer.firstChild.remove();
    }
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


// Función que muestra al asistente virtual "escribiendo"
function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'message bot';
    indicator.id = 'typingIndicator';
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator active';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    
    indicator.appendChild(typingDiv);
    messagesContainer.appendChild(indicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


// Función que hace que el asistente virtual deje de "escribir"
function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}


// Función que genera el UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


// Función que envía un mensaje al servidor
async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    messageInput.value = '';
    sendButton.disabled = true;
    messageInput.disabled = true;
    
    showTypingIndicator();

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: "sendMessage",
                chatInput: message,
                sessionId: sessionId
            })
        });

        removeTypingIndicator();

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        console.log(data)
        const botResponse = data.output;
        addMessage(botResponse, false);

    } catch (error) {
        removeTypingIndicator();
        addMessage('Lo siento, lamento comunicarle que se produjo un error inesperado al procesar su mensaje. Por favor, inténtelo de nuevo.', false);
        console.error('Error:', error);
        messageInput.value = '';
    } finally {
        sendButton.disabled = false;
        messageInput.disabled = false;
        messageInput.focus();
    }
}


// Eventos que detectan la intentción del usuario de enviar un mensaje al asistente
sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

messageInput.focus();
