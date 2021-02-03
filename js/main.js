let recordingStartTime;
let recordingStopTime;
let songNotes = [];
let isRecording = false;
let barTime;
let loopArray = [];
let index = 0;
let divId = 1;
let tempName = "";

bar4.classList.add("active");
// validation for recording
function change() {
  if (isRecording == true) {
    stopRecording();
    isRecording = false;
  } else {
    startRecording();
    isRecording = true;
  }
}

// starts recording time
function startRecording() {
  recordingStartTime = Date.now();
  tempName = createDiv();
  startTimer();
  move();
  isPlaying = false;
  isMetronome = false;
  recordButton.classList.add("active");
}

function stopRecording() {
  isRecording = false;
  stopTimer();
  resetTimer();
  saveLoop();
  checkLoop();
  recordButton.classList.remove("active");
}
let sInterval;
let sTimeout;
// plays recorded beats
function playSong() {
  let newArr = [];
  if (loopArray.length != 0) {
    for (let i = 0; i < loopArray.length; i++) {
      newArr = newArr.concat(loopArray[i]);
    }
    newArr.forEach((note) => {
      sInterval = setTimeout(() => {
        console.log(isPlaying);
        if (isPlaying) playNote(keyMap[note.key]);
      }, note.startTime);
    });
  }
}
function stopSong() {
  stopTimer();
  resetTimer();
  clearTimeout(sInterval);
  playButton.classList.remove("active");
}
/**
 *
 * @param {Object} key
 */
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });

  if (isRecording) {
    recordNote(key.dataset.note);
  }
}

/**
 *
 * @param {String} note
 */
function recordNote(note) {
  songNotes.push({
    key: note,
    startTime: Date.now() - recordingStartTime,
  });
}

function saveLoop() {
  for (let i = 0; i < songNotes.length; i++) {
    loopArray.splice(index, 1, songNotes);
  }
  songNotes = [];
  index += 1;
  //console.log(loopArray);
}

function createDiv() {
  divName = "looper" + divId;
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", divName);
  newDiv.style.margin = "auto";
  newDiv.style.width = 96 + "%";
  newDiv.style.height = 40 + "px";
  newDiv.style.borderBottom = "2px solid white";
  newDiv.style.position = "relative";
  looperWrapper.appendChild(newDiv);
  divId++;
  return divName;
}

let i = 0;
let elem = document.getElementById("progress-line");
elem.style.position = "absolute";
function move() {
  if (i == 0) {
    i = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (moveLeft >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        elem.style.left = moveLeft + "%";
      }
    }
  }
}

function checkLoop() {
  const temp = document.getElementById(tempName);
  if (temp.querySelectorAll(".loop").length === 0) {
    temp.parentNode.removeChild(temp);
    divId--;
  }
}
