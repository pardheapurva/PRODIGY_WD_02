let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    seconds = minutes = hours = 0;
    isRunning = false;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lapTimer() {
    if (isRunning) {
        let lapTime = document.getElementById("display").innerText;
        let li = document.createElement("li");
        li.innerText = "✨ " + lapTime;
        document.getElementById("laps").appendChild(li);
    }
}