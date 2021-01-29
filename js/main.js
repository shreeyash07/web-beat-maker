let recordingStartTime;
let songNotes = [];
let isRecording = false;

//toggler
function togglerRecording() {
  recordButton.classList.toggle("active");
}

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
}

function stopRecording() {
  // playSong();
}

// plays recorded beats
function playSong() {
  if (songNotes.length === 0) return;
  songNotes.forEach((note) => {
    setTimeout(() => {
      playNote(keyMap[note.key]);
    }, note.startTime);
  });
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
