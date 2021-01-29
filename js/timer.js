const timer = document.getElementById("timer");
let ms = 0;
let sec = 0;

let stopTime = true;

function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
  }
}

function timerCycle() {
  if (stopTime == false) {
    sec = parseInt(sec);

    ms = parseInt(ms);

    ms = ms + 1;
    if (ms == 100) {
      sec = sec + 1;
      ms = 0;
    }

    if (ms < 10 || ms == 0) {
      ms = "0" + ms;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    timer.innerHTML = sec + ":" + ms;

    if (sec == 3) {
      stopRecording();
    }

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00";
  ms = 0;
  sec = 0;
}
