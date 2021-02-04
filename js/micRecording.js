let micDevice = navigator.mediaDevices.getUserMedia({ audio: true });
let items = [];
let play;
let mainAudio = document.createElement("audio");

micDevice.then((stream) => {
  let recorder = new MediaRecorder(stream);
  console.log(recorder);
  recorder.ondataavailable = (e) => {
    items.push(e.data);

    if (recorder.state == "inactive") {
      let blob = new Blob(items, { type: "audio/webm" });

      mainAudio.setAttribute("controls", "controls");
      console.log(mainAudio);
      mic.appendChild(mainAudio);
      mainAudio.controls = true;
      mainAudio.src =
        window.webkitURL.createObjectURL(blob) ||
        window.URL.createObjectURL(blob);
    }
  };
  mic.addEventListener("click", () => {
    recorder.start();
    setTimeout(() => {
      recorder.stop();
    }, 5000);
  });
});
