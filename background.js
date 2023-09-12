let timeLeft = 0;
let timeinterval;

function startTimer(minutes) {
    timeLeft = minutes * 60;

    if (timeinterval) {
        clearInterval(timeinterval);
    }

    timeinterval = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft > 0) {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        chrome.runtime.sendMessage({ time: `${minutes}: ${seconds}` });

        timeLeft--;
    } else {
        clearInterval(timeinterval);
        chrome.runtime.sendMessage({ time: '00:00' })
    }
}

chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === 'startTimer') {
        // Start the timer with the specified minutes
        startTimer(request.minutes);
    }
});