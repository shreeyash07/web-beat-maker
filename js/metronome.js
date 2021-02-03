let mInterval;

inputSlider.oninput = () => {
  let value = inputSlider.value;
  stopMetronome();
  metronome();
  slideValue.textContent = value;
  slideValue.style.left = value / 2 + "%";
  slideValue.classList.add("show");
};
inputSlider.onblur = () => {
  slideValue.classList.remove("show");
};

function metronome() {
  const sound = document.getElementById("hat");
  mInterval = setInterval(() => {
    sound.play();
    sound.currentTime = 0;
    dot.classList.toggle("active");
  }, (60 / parseInt(inputSlider.value)) * 1000);
}
function stopMetronome() {
  clearInterval(mInterval);
  dot.classList.remove("active");
}
