// listener for click for each keys
keys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key);
    if (isRecording) {
      const temp = document.getElementById(tempName);
      const loop = document.createElement("div");
      loop.style.backgroundColor = String(key.id);
      loop.style.left = moveLeft + "%";
      loop.setAttribute("class", "loop");
      temp.appendChild(loop);
    }
  });
});

let isMetronome = true;
dot.addEventListener("click", () => {
  if (isMetronome == true) {
    metronome();
    isMetronome = false;
  } else {
    stopMetronome();
    isMetronome = true;
  }
});
playButton.addEventListener("click", () => {
  playSong();
  startTimer();
  elem.style.left = moveLeft + "%";
  move();
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
    loop.style.left = moveLeft + "%";
    temp.appendChild(loop);
  }
});

bar2.addEventListener("click", (e) => {
  timeInterval = 3;
  bar2.classList.add("active");
  bar4.classList.remove("active");
  bar8.classList.remove("active");
  bar16.classList.remove("active");
  leftValue = 0.333333;
});
bar4.addEventListener("click", (e) => {
  timeInterval = 6;
  bar4.classList.add("active");
  bar2.classList.remove("active");
  bar8.classList.remove("active");
  bar16.classList.remove("active");
  leftValue = 0.1666667;
});
bar8.addEventListener("click", (e) => {
  timeInterval = 9;
  bar8.classList.add("active");
  bar2.classList.remove("active");
  bar4.classList.remove("active");
  bar16.classList.remove("active");
  leftValue = 0.111111;
});
bar16.addEventListener("click", (e) => {
  timeInterval = 12;
  bar16.classList.add("active");
  bar2.classList.remove("active");
  bar8.classList.remove("active");
  bar4.classList.remove("active");
  leftValue = 0.083333;
});
