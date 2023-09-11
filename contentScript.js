const workminutes = 25;
let time = workminutes * 60 && chillminutes * 60;


const chillminutes = 5;


const countdownEl = document.getElementById('timer');


setInterval(timer, 1000);

function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 5 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

// function timer() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 25 ? '0' + seconds : seconds;

//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;
// }

