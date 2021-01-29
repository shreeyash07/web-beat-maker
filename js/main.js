let recordingStartTime;
let recordingStopTime;
let songNotes = [];
let isRecording = false;
let barTime;
let loopArray = [];
let index = 0;

//toggler
function togglerRecording() {
  recordButton.classList.toggle("active");
}

// validation for recording
function change() {
  if (isRecording == true) {
    stopTimer();
    resetTimer();
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
  showLoop();
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
  console.log(songNotes);
}

function saveLoop() {
  for (let i = 0; i < songNotes.length; i++) {
    loopArray.splice(index, 1, songNotes);
  }
  index += 1;
  songNotes = [];
}

function showLoop() {
  for (let i = 0; i < songNotes.length; i++) {
    const loop = document.createElement("div");
    loop.setAttribute("class", "loop");
    loop.innerHTML = songNotes[i].key;
    looper.appendChild(loop);
  }
}
