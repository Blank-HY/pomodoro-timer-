const start_timer = document.getElementById('start_timer');
const timerDisplay = document.getElementById('timerDisplay');

// Function to update the timer display
function updateTimerDisplay(minutes, seconds) {
    const timerDisplay = document.getElementById("timer_display");
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Handle the "Grind Time" button click
start_timer.addEventListener("click", () => {
    chrome.runtime.sendMessage({ startTimer: true });
});

// Listen for timer updates from the background script
chrome.runtime.onMessage.addListener((message) => {
    if (message.remainingTime !== undefined) {
        const minutes = Math.floor(message.remainingTime / 60);
        const seconds = message.remainingTime % 60;
        updateTimerDisplay(minutes, seconds);
    }
});

  





