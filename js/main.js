let recordingStartTime;
let recordingStopTime;
let songNotes = [];
let isRecording = false;
let barTime;
let loopArray = [];
let index = 0;
let divId = 1;
let tempName = "";

//toggler
function togglerRecording() {
  recordButton.classList.toggle("active");
}

// validation for recording
function change() {
  if (isRecording == true) {
    stopTimer();
    resetTimer();
    stopRecording();
    isRecording = false;
  } else {
    startRecording();
    startTimer();
    isRecording = true;
  }
}

// starts recording time
function startRecording() {
  recordingStartTime = Date.now();
  tempName = createDiv();
}

function stopRecording() {
  isRecording = false;
  stopTimer();
  resetTimer();
  togglerRecording();
  saveLoop();
}

// plays recorded beats
function playSong() {
  let newArr = [];
  if (loopArray.length != 0) {
    for (let i = 0; i < loopArray.length; i++) {
      newArr = newArr.concat(loopArray[i]);
    }
    newArr.forEach((note) => {
      setTimeout(() => {
        playNote(keyMap[note.key]);
      }, note.startTime);
    });
  }
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
  //console.log(songNotes);
}

function saveLoop() {
  for (let i = 0; i < songNotes.length; i++) {
    loopArray.splice(index, 1, songNotes);
  }
  songNotes = [];
  index += 1;
}

function createDiv() {
  divName = "looper" + divId;
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", divName);
  newDiv.style.width = 100 + "%";
  newDiv.style.height = 30 + "px";
  looperWrapper.appendChild(newDiv);
  divId++;
  return divName;
}
