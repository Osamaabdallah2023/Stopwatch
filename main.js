let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let startTime, endTime, elapsedTime = 0;
let intervalId;

function start() {
  startTime = Date.now();
  intervalId = setInterval(updateTime, 10);
}

function stop() {
  clearInterval(intervalId);
  endTime = Date.now();
  elapsedTime += endTime - startTime;
}

function reset() {
  startTime = 0;
  endTime = 0;
  elapsedTime = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTime();
}

function updateTime() {
  elapsedTime = startTime ? Date.now() - startTime + elapsedTime : elapsedTime;
  hours = Math.floor(elapsedTime / 3600000);
  minutes = Math.floor((elapsedTime % 3600000) / 60000);
  seconds = Math.floor((elapsedTime % 60000) / 1000);
  milliseconds = Math.floor((elapsedTime % 1000) / 10);

  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(2, "0");
}

// Add event listeners to buttons

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);