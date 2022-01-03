var startButton = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var secondsLeft = 60;

//creating countdown of 60 seconds
function setTime() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

//making sure countdown starts only when user clicks on start button
startButton.onclick = function () {
  setTime();
};
