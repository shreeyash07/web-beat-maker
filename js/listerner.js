// listener for click for each keys
keys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key);
    if (isRecording) {
      const temp = document.getElementById(tempName);
      const loop = document.createElement("div");
      loop.style.backgroundColor = String(key.id);
      loop.style.marginRight = 40 + "px";
      loop.setAttribute("class", "loop");
      temp.appendChild(loop);
    }
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

  const temp = document.getElementById(tempName);
  let color = "";

  if (purpleKeysIndex > -1) {
    playNote(purpleKeys[purpleKeysIndex]);
    color = purpleKeys[purpleKeysIndex];
  }
  if (greenKeysIndex > -1) {
    playNote(greenKeys[greenKeysIndex]);
    color = greenKeys[greenKeysIndex];
  }
  if (blueKeysIndex > -1) {
    playNote(blueKeys[blueKeysIndex]);
    color = blueKeys[blueKeysIndex];
  }

  if (isRecording) {
    const loop = document.createElement("div");
    loop.setAttribute("class", "loop");
    loop.style.backgroundColor = String(color.id);
    loop.style.marginLeft = moveLeft + "px";

    temp.appendChild(loop);
    checkLoop = true;
  }
});
