let micDevice = navigator.mediaDevices.getUserMedia({ audio: true });
let items = [];

micDevice.then((stream) => {
  let recorder = new MediaRecorder(stream);

  recorder.ondataavailable = (e) => {
    items.push(e.data);

    if (recorder.state == "inactive") {
      let blob = new Blob(items, { type: "audio/webm" });
      console.log(blob);
      let mainAudio = document.createElement("audio");
      mainAudio.setAttribute("controls", "controls");
      mic.appendChild(mainAudio);
      mainAudio.controls = true;
      mainAudio.innerHTML =
        window.webkitURL.createObjectURL(blob) ||
        window.URL.createObjectURL(blob);
    }
  };

  recorder.start(100);
  setTimeout(() => {
    recorder.stop();
  }, 5000);
});
