let startButton = document.getElementById('button-start');
let stopButton = document.getElementById('button-stop');
let resetButton = document.getElementById('button-reset');

let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

let currentSeconds = 0;
let currentMinutes = 0;
let currentHours = 0;

let intervalId;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    intervalId = setInterval(() => {
        currentSeconds++;
        secondsElement.innerText = "0" + currentSeconds
        if (currentSeconds >= 10) {
            secondsElement.innerText = currentSeconds

        }

        if (currentSeconds === 59) {
            currentSeconds = 0;
            currentMinutes++;
            minutesElement.innerText = "0" + currentMinutes

            if (currentMinutes === 60) {
                currentMinutes = 0;
                currentHours++;
            }
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    currentSeconds = 0;
    currentMinutes = 0;
    currentHours = 0;
    secondsElement.innerText = '00';
    minutesElement.innerText = '00';

}
