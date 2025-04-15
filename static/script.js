function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") return;

    chatbox.innerHTML += `<p class="user-text"><strong>You:</strong> ${userInput}</p>`;

    fetch("/chat", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput }) // Convert to JSON
    })
    .then(response => response.json())
    .then(data => {
        chatbox.innerHTML += `<p class="bot-text"><strong>Bot:</strong> ${data.response}</p>`;
        document.getElementById("userInput").value = "";
        chatbox.scrollTop = chatbox.scrollHeight;
    })
    .catch(error => console.error("Error:", error));
}
