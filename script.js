// Function to send a message
function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value;
  
  // Create a new paragraph element
  var newMessage = document.createElement('p');
  newMessage.textContent = message;
  
  // Append the new message to the chat messages container
  var chatMessages = document.getElementById('chat-messages');
  chatMessages.appendChild(newMessage);
  
  // Clear the input field
  messageInput.value = '';
  
  // Scroll to the bottom of the chat messages container
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add event listener to the send button
var sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);
