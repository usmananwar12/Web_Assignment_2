document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.getElementById("chatBtn");
    const chatPopup = document.getElementById("chatPopup");
    const closeChat = document.getElementById("closeChat");
    chatBtn.addEventListener("click", function () {
        chatPopup.style.display = "block";
    });

    closeChat.addEventListener("click", function () {
        chatPopup.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        alert("Thank you for your feedback! We appreciate your time.");
        this.reset(); 
    });
});

// assignment # 2 code starts here


