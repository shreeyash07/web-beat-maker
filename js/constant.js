const PURPLE_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
];
const GREEN_KEYS = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
const BLUE_KEYS = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", `'`];

const recordButton = document.querySelector(".record-button");
const playButton = document.querySelector(".play-button");
const keys = document.querySelectorAll(".key");
const purpleKeys = document.querySelectorAll(".key.purple");
const greenKeys = document.querySelectorAll(".key.green");
const blueKeys = document.querySelectorAll(".key.blue");
const looper = document.getElementById("looper");
const looperWrapper = document.getElementById("looper-wrapper");
const bar2 = document.getElementById("bar2");
const bar4 = document.getElementById("bar4");
const bar8 = document.getElementById("bar8");
const bar16 = document.getElementById("bar16");

const keyMap = [...keys].reduce((map, key) => {
  map[key.dataset.note] = key;
  return map;
}, {});
