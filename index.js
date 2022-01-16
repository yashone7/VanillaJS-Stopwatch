/**
 * TODO:
 *
 * 1. clock container - to show the hours: minutes : second
 *
 * 2. get the
 *
 *  setIterval - for incrementing seconds and minutes etc
 *
 * 3. timestamp for recoring the current time at which the stopwatch has been stopped
 *
 * 1000ms === 1s
 *
 * 10ms
 *
 * 0 -> 10 -> 20 ->
 *
 *
 * 60s = 1 minute
 *
 * 60m = 1 hour
 *
 * 00 / 00 / 00
 *
 * increment time every 100 millisecond
 *
 */

const hourBox = document.getElementById("hours");
const minuteBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

hourBox.innerText = "00";
minuteBox.innerText = "00";
secondsBox.innerText = "00";

let isStarted = true;
let isPaused = false;
let isReset = false;

let newTime;

let startTime = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// this should work only when user activates

if (!isPaused) {
  // run here
  setInterval(renderTimeBox, 1000);
}

if (isReset) {
  // start the clock all over again
}

startBtn.addEventListener("click", () => {
  isPaused = false;
});

resetBtn.addEventListener("click", () => {
  console.log("watch reset");
  isPaused = true;
  isReset = true;
  secondsBox.innerText = "00";
  minuteBox.innerText = "00";
  hourBox.innerText = "00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  startTime = 0;
  console.log(minutes, seconds, hours);
});

pauseBtn.addEventListener("click", () => {
  isPaused = true;
  console.log(isPaused);
});

// let isStarted = true;

function renderTimeBox() {
  if (!isPaused) {
    newTime = startTime++;
    secondsBox.innerText = newTime;
    console.log(newTime);

    if (newTime > 59) {
      startTime = 0;
      minutes = minutes + 1;
      minuteBox.innerText = minutes;
      console.log(`minutes ${minutes}`);
      if (hours > 59) {
        hours = hours + 1;
        hourBox.innerText = hours;
        console.log(hours);
      }
    }
  }
  return;
}

console.log(minutes, seconds, hours);
