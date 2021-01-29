// listener for click for each keys
keys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

// record and play button listener
recordButton.addEventListener("click", () => {
  togglerRecording();
});

playButton.addEventListener("click", () => {
  playSong();
  //playButton.classList.add("active");
});

// keydown listener
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const purpleKeysIndex = PURPLE_KEYS.indexOf(key);
  const greenKeysIndex = GREEN_KEYS.indexOf(key);
  const blueKeysIndex = BLUE_KEYS.indexOf(key);

  if (purpleKeysIndex > -1) {
    playNote(purpleKeys[purpleKeysIndex]);
  }
  if (greenKeysIndex > -1) playNote(greenKeys[greenKeysIndex]);
  if (blueKeysIndex > -1) playNote(blueKeys[blueKeysIndex]);
});
