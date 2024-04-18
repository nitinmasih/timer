const timeInput = document.getElementById("time-input");
const display = document.querySelector(".display");

const audio = document.getElementById("audio");

let remainingTime = 0;
let start = true;
let timer;

const startTimer = () => {
  if(timer){
    clearInterval(timer)
  }
  if (start) {
    remainingTime = timeInput.value;
  } else {
    remainingTime;
  }
  timer = setInterval(() => {
    updateTime();
  }, 1000);
};

const updateTime = () => {
  if (remainingTime > 0) {
    remainingTime--;
    displayTime();
    playMusic();
  } else {
    clearInterval(timer);
  }
};

const displayTime = () => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = Math.floor(remainingTime % 60);
  display.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const pauseTimer = () => {
  clearInterval(timer);
  start = false;
  audio.pause()
};

const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", pauseTimer);

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  remainingTime = 0;
  clearInterval(timer);
  timeInput.value = "";
  display.innerHTML = "00:00:00";
  start = true;
  playMusic();
});

const playMusic = () => {
  if (remainingTime < 6) {
    audio.play();
  }
  if (remainingTime == 0) {
    audio.pause();
  }
};

export { startTimer };
