const timer = document.getElementById("timer");
let ms = 0;
let sec = 0;
let moveLeft = 0;
let leftValue = 0.1666667;
let stopTime = true;
let timeInterval = 6;
let v = timeInterval;
let sl = true;

// starts timer
function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    timerCycle();
  }
}

// stops timer
function stopTimer() {
  if (stopTime == false) {
    moveLeft = 0;
    stopTime = true;
  }
}

// main function for timeCycle
function timerCycle() {
  if (stopTime == false) {
    sec = parseInt(sec);

    ms = parseInt(ms);

    ms = ms + 1;
    moveLeft += leftValue;
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

    // stops recording and loops the play
    if (sec == timeInterval) {
      stopRecording();
      playButton.classList.remove("active");
      stopSong();
      v = timeInterval;
      if (isPlaying) {
        r();
      }
    } else {
      setTimeout("timerCycle()", 10);
    }
  }
}

// loop function
function r() {
  if (v == timeInterval) {
    playSong();
    startTimer();
    elem.style.left = moveLeft + "%";
    playButton.classList.add("active");
    move();
  }
}

// resets the timer
function resetTimer() {
  timer.innerHTML = "00:00" + "/" + timeInterval + "sec";
  ms = 0;
  sec = 0;
  moveLeft = 0;
}
