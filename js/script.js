const secondArrow = document.querySelector(".s"),
  minuteArrow = document.querySelector(".m"),
  hourArrow = document.querySelector(".h"),
  hoursBox = document.querySelector(".hours"),
  minutesBox = document.querySelector(".minutes"),
  tabsLinkSpan = document.querySelector(".tabsLink__span");

// new Date() - встроенный глобальный объект (class) который выдает информацию о дате и времен

function clock() {
  let time = new Date();

  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();

  secondArrow.style = `transform: rotate(${seconds * 6}deg)`;
  minuteArrow.style = `transform: rotate(${minutes * 6}deg)`;
  hourArrow.style = `transform: rotate(${hours * 30}deg)`;

  hoursBox.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesBox.innerHTML = minutes < 10 ? "0" + minutes : minutes;

  setTimeout(() => {
    clock();
  }, 1000);
}

clock();

let links = document.querySelectorAll(".tabsItem");
let tabs = document.querySelectorAll(".tabsContentItem");

links.forEach((el, i) => {
  el.addEventListener("click", () => {
    removeActive();
    el.classList.add("active");
    tabs[i].classList.add("active");
  });
});

function removeActive() {
  links.forEach((el, i) => {
    el.classList.remove("active");
    tabs[i].classList.remove("active");
  });
}

let seconds = 0;
let minutes = 0;
let hours = 0;

const startBtn = document.querySelector(".stopwatch__btn");

let stopWatchS = document.querySelector(".stopwatch__seconds"),
  stopWatchM = document.querySelector(".stopwatch__minutes"),
  stopWatchH = document.querySelector(".stopwatch__hours");

let interval;

startBtn.addEventListener("click", function () {
  if (startBtn.innerHTML == "start") {
    tabsLinkSpan.classList.add("active");
    interval = setInterval(() => {
      stopWatchS.innerHTML++;
      if (stopWatchS.innerHTML >= 60) {
        stopWatchM.innerHTML++;
        stopWatchS.innerHTML = 0;
      } else if (stopWatchM.innerHTML >= 60) {
        stopWatchH.innerHTML++;
        stopWatchM.innerHTML = 0;
      }
    }, 1000);
    startBtn.innerHTML = "stop";
  } else if (startBtn.innerHTML == "stop") {
    tabsLinkSpan.classList.add("active_clear");
    clearInterval(interval);
    startBtn.innerHTML = "clear";
  } else if ((startBtn.innerHTML = "clear")) {
    tabsLinkSpan.classList.remove("active_clear");
    tabsLinkSpan.classList.remove("active");
    stopWatchH.innerHTML = 0;
    stopWatchM.innerHTML = 0;
    stopWatchS.innerHTML = 0;
    startBtn.innerHTML = "start";
  }
});