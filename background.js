let timer;
let remainingTime = 1500; // 25 minutes in seconds

chrome.runtime.onMessage.addListener((message) => {
    if (message.startTimer) {
        startTimer();
    }
});

function startTimer() {
    chrome.alarms.create({ delayInMinutes: 1 });
}

chrome.alarms.onAlarm.addListener(() => {
    remainingTime--;
    if (remainingTime <= 0) {
        chrome.notifications.create({
            type: "basic",
            title: "Pomodoro Timer",
            message: "Time's up! Take a break.",
        });
        remainingTime = 1500; // Reset timer for the next cycle
    }

    // Send the remaining time to the popup
    chrome.runtime.sendMessage({ remainingTime });
});
 

