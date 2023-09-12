const grind_time = document.getElementById('grind_time');
const timerDisplay = document.getElementById('timerDisplay');

grind_time.addEventListener('click', () => {
    // Send a message to the background script to start the timer
    chrome.storage.local.set({
        isRunning: true,
    })
});






