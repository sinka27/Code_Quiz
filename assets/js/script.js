//var startPath = "./assets/HTML/start.html";
var startButton = document.getElementById("startbutton");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var timeEl = document.getElementById("time");
var secondsLeft = 60;

//creating timer of 60 seconds
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
  //calling our timer function
  setTime();

  welcomeContainer.classList.add("hide");

  questionContainer.classList.remove("hide");

  //calling question function
};

// function mainPopulate(file, callbackFunction) {
//     fetch(file)
//         .then(function (response) {
//             return response.text();
//         })
//         .then(function (text) {
//             document.getElementById('main').innerHTML = text;

//             if (callbackFunction !== null) {
//                 callbackFunction();
//             }
//         })
// }

// function updateStartButton() {
//     var startButton = document.getElementById("startbutton");
//     startButton.onclick = function () {
//       //calling our timer function
//       setTime();

//       //calling our question function
//     };
// }
// mainPopulate(startPath, updateStartButton);
