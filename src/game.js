// document.getElementById("timer").innerHTML = 001 + ":" + 01;
// startTimer();

// function startTimer() {
//   let presentTime = document.getElementById("timer").innerHTML;
//   let timeArray = presentTime.split(/[:]+/);
//   let m = timeArray[0];
//   let s = checkSecond(timeArray[1] - 1);
//   if (s == 59) {
//     m = m - 1;
//   }
//   //   if (m < 0) {
//   //     alert("timer completed");
//   //   }

//   document.getElementById("timer").innerHTML = m + ":" + s;
//   setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {
//     sec = "0" + sec;
//   } // add zero in front of numbers < 10
//   if (sec < 0) {
//     sec = "59";
//   }
//   return sec;
// }

document.querySelectorAll(".target").forEach((target) => {
  target.addEventListener("click", (event) => {
    target.classList.toggle("moorhuhn");
  });
});

let random = Math.floor(Math.random() * 12);

setInterval(function () {
  //assigning moorhuhn class a random div element
}, 2000);
