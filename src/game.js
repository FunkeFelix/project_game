document.getElementById("timer").innerHTML = 003 + ":" + 01;
startTimer();

function startTimer() {
  let presentTime = document.getElementById("timer").innerHTML;
  let timeArray = presentTime.split(/[:]+/);
  let m = timeArray[0];
  let s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //   if (m < 0) {
  //     alert("timer completed");
  //   }

  document.getElementById("timer").innerHTML = m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
let points = 0;
let shots = 0;

document.querySelectorAll(".target").forEach((target) => {
  target.addEventListener("click", (event) => {
    if (target.classList.contains("moorhuhn")) {
      target.classList.toggle("moorhuhn");
      points += 10;
    } else {
      target.classList.toggle("jägermeister");
      shots += 1;
    }
  });
});

setInterval(function () {
  document.querySelector(
    "body > div.heading > section.points > span"
  ).innerText = points;
  document.querySelector("#shots > span").innerText = shots;
}, 10);

setInterval(function () {
  let random = Math.floor(Math.random() * 4) + 1;
  if (random === 4) {
    document
      .querySelector(
        `body > div.gameField > div.boxMiddle > div:nth-child(${random})`
      )
      .classList.add("jägermeister");
  }
  document
    .querySelector(
      `body > div.gameField > div.boxMiddle > div:nth-child(${random})`
    )
    .classList.add("moorhuhn");
}, 1000);

setInterval(function () {
  let random = Math.floor(Math.random() * 4) + 1;
  if (random === 3) {
    document
      .querySelector(
        `body > div.gameField > div.boxTop > div:nth-child(${random})`
      )
      .classList.add("jägermeister");
  } else {
    document
      .querySelector(
        `body > div.gameField > div.boxTop > div:nth-child(${random})`
      )
      .classList.add("moorhuhn");
  }
}, 2000);

setInterval(function () {
  let random = Math.floor(Math.random() * 4) + 1;
  if (random === 2) {
    document
      .querySelector(
        `body > div.gameField > div.boxBottom > div:nth-child(${random})`
      )
      .classList.add("jägermeister");
  }
  document
    .querySelector(
      `body > div.gameField > div.boxBottom > div:nth-child(${random})`
    )
    .classList.add("moorhuhn");
}, 3000);
